const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

class AuthController {
   async handleRegister(req, res) {
      const username = req.body.username;
      const password = req.body.password;

      // check payload
      if (!username || !password) return res.sendStatus(401); //unauthorized

      // check for duplicate
      const founderUser = await User.findOne({ username: username });
      if (founderUser) return res.sendStatus(409);

      try {
         // generate hash password
         const salt = await bcrypt.genSalt(10);
         const hashPassword = await bcrypt.hash(password, salt);

         const newUser = new User({
            username: username,
            password: hashPassword,
         });
        await newUser.save();

         res.status(201).json("new user created !");
      } catch (err) {
         res.status(500).json({ message: err.message });
      }
   }

   async handleLogin(req, res) {
      const { username, password } = req.body;

      // check payload
      if ((!username, !password)) return res.sendStatus(401); // unauthorized

      try {
         // check username is in db
         const founderUser = await User.findOne({ username: username });
         if (!founderUser) return res.sendStatus(401);

         const { role_code: founderRole_code, username: founderUsername } =
            founderUser;

         // check password
         const isCorrectPassWord = await bcrypt.compare(
            password,
            founderUser.password
         );
         if (!isCorrectPassWord) return res.sendStatus(401);

         //generate token
         const token = jwt.sign(
            { username: founderUsername, role_code: founderRole_code },
            "nguyenhuudat",
            { expiresIn: "10s" }
         );
         const refreshToken = jwt.sign(
            { username: founderUsername, role_code: founderRole_code },
            "nguyenhuudat",
            { expiresIn: "1d" }
         );

         //update refresh token to user
         await User.updateOne(
            { username: username },
            { refresh_token: refreshToken }
         );

         // response result
         res.cookie("jwt", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "none",
         });

         // response {token: ''}
         res.json({ token });
      } catch (err) {
         res.status(500).json({ message: err });
      }
   }
}

module.exports = new AuthController();
