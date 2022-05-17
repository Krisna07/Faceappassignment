const { Module } = require("module");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a username"],
    },
    email: {
      type: String,
      require: [true, "Please add an email"],
      unique: true,
    },
    batchid: {
      type: String,
      require: [true, "Please add an email"],
      unique: true,
    },
    department: {
      type: String,
      require: [true, "Please add a depatment location"],
    },
    password: {
      type: String,
      require: [true, "Please add a Password"],
    },
    OTP: {
      type: String,
      require: [false],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
