const { Module } = require("module");
const mongoose = require("mongoose");

const criminalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name"],
    },
    Age: {
      type: String,
      require: [true, "Please add an age"],
    },
    NoOffence: {
      type: String,
      require: [true, "Please add a number"],
    },
    Found: {
      type: Boolean,
      require: [true, "Please add a status"],
    },
    // Image: {
    //   type: URL,
    //   require: [true, "Please add atleast one image"],
    // },
    Descriptors: {
      type: Array,
      require: [true, "Please add the face discriptor for the Criminals"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Criminal", criminalSchema);
