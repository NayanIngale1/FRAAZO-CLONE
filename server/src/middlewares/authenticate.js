require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  // console.log(req.headers.authorization);
  if (!req.headers.authorization.startsWith("Bearer ")) {
    return res.status(401).send("Unauthorized request");
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = await verifyToken(token);
    // const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).send(err.message);
  }
};
