const jwt = require('jsonwebtoken');

const Login = (req, res, next) => {
  const aunthHeader = req.headers.authorization;

  // console.log(aunthHeader);

  if (!aunthHeader) {
    return res.status(401).json({ message: 'login dahulu ' });
  }
  const token = aunthHeader.split(' ')[1];

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'login tidak berhasil',
      eror: error.message,
    });
  }
};

module.exports = { Login };
