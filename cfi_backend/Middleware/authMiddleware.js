// const jwt = require("jsonwebtoken");
// const asyncHandler = require("express-async-handler");
// const User = require("../Model/userModel");

// const protect = asyncHandler(async (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       //token from header
//       token = req.headers.authorization.split("")[1];
//       //varify token
//       const decoded = jwt.verify(token, process.env.JWT_secret);
//       //get usert from token
//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     } catch (error) {
//       console.log(error);
//       res.status(401);
//       throw new Error("Not Authorized");
//     }
//   }
//   if (!token) {
//     res.status(401);
//     throw new Error("Not Authorized, No token");
//   }
// });

// module.exports = { protect };
