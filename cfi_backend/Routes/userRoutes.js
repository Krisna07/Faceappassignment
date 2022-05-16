const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getUser,
} = require("../Controller/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getMe);
router.get("/", getUser);

module.exports = router;
