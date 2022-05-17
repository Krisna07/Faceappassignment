const asyncHandler = require("express-async-handler");

const User = require("../Model/userModel");

//@desc register new user
//@routes POST api/User
//@access public
const getUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: users });
  res.status(500).json({ message: error });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, batchid, department } = req.body;
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
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  //create User
  const user = await User.create({
    name,
    email,
    password,
    batchid,
    department,
  });

  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      department: user.department,
      batchid: user.batchid,
    });
  } else {
    res.status(500);
    throw new Error("Invalid user data");
  }
  res.send("New user created");
});

// des authenticate user
// routes post api/user
//access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password, OTP } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please check The fields!!");
  }
  //look for the user
  const user = await User.findOne({ email });
  if (user && user.password == password) {
    user.OTP = OTP;
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      OTP: user.OTP,
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
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("Invalid user");
  }
  res.status(200).json({ message: user });
});

module.exports = { registerUser, loginUser, getMe, getUser };
