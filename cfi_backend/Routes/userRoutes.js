const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getUser
} = require("../Controller/userController");

// const { protect } = require("../Middleware/authMiddleware");
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);
router.get("/", getUser);

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
});
module.exports = router;
