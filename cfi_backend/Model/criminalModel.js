const { Module } = require("module");
const mongoose = require("mongoose");

const criminalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name"],
    },
    age: {
      type: String,
      require: [true, "Please add an age"],
    },
    offence: {
      type: String,
      require: [true, "Please add a number"],
    },
    found: {
      type: Boolean,
      require: [true, "Please add a status"],
    },
    address: {
      type: String,
      require: [true, "Please add a address"],
    },
    descriptors: {
      type: Array,
      require: [true, "Please add the face discriptor for the Criminals"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Criminal", criminalSchema);
