const User = require("../models/User");

class LoginController {
  async login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
      res.json("missing payload");
      return;
    }
    try {
      const user = await User.findOne({ username: username });
      const isCorrectPassword = password === user.password;

      if (isCorrectPassword) {
        req.session.isLogin = user;
        res.json("logined");
      } else {
        res.status(500).json("username or password is incorrect");
      }
    } catch (error) {
      res.status(500).json("username or password is incorrect");
    }
  }

  logout(req, res) {
    req.session.destroy((err) => {
      res.json(err);
    });
    res.json("logouted");
  }
}

module.exports = new LoginController();
