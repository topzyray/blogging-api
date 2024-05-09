import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const authenticate = (req, res, next) => {
  // console.log(req.headers.authorization.split(" ")[1]);
  // const token = req?.header("Authorization").split(" ")[1];

  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (!token)
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};
