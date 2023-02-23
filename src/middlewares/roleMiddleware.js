class roleMiddleware {
  isAdmin(req, res, next) {
    console.log("role middleware pass");
    if (!req.session.isLogin) return res.json("Forbiden");
    const { role_code } = req.session.isLogin;
    if (role_code !== "R1") return res.json("require admin role");
    next();
  }
}
module.exports = new roleMiddleware();
