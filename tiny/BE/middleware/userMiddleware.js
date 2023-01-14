const { User } = require("../models/userModels");



exports.checkUser = async (req, res, next) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    console.log(user);
    if (user !== null) {
      if (user.password === password) {
        next()
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    } else {
      res.status(401).json({ message: "User not found" });
    }
  };

  exports.authenticateToken = (req, res, next) => {
    console.log('authent')
    const authHeader = req.headers.authorization
    console.log(authHeader, 'authenticateToken');
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
      if (err) return res.send(err)
        return res.send(result)
    });
  };
  