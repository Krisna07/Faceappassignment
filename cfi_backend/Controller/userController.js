const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../Model/userMOdel");
const e = require("express");

//@desc register new user
//@routes POST api/User
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please check The fields!!");
  }
  //check if the user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(500);
    throw new Error("Invalid user data");
  }

  res.send("New user cretaed");
});

// des authenticate user
// routes post api/user
//access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please check The fields!!");
  }
  //look for the user
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(500);
    throw new Error("Invalid Credentials");
  }
});

//@desc Get user
//@routes get api/User/me
//@access private
const getMe = asyncHandler(async (req, res) => {
  res.send("user data displayed");
});

//generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_secret, { expiresIn: "30d" });
};

module.exports = { registerUser, loginUser, getMe };
