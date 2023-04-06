class roleMiddleware {
  isAdmin(req, res, next) {
    console.log("role middleware pass", req.session);
    if (!req.session.isLogin) return res.status(403).json({message: 'require login'});
    const { role_code } = req.session.isLogin;
    if (role_code !== "R1") return res.sendStatus(401).json({message: 'require R1 role'});
    next();
  }
}
module.exports = new roleMiddleware();
