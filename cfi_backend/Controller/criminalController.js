const { error } = require("console");
const asyncHandler = require("express-async-handler");
const fs = require("fs");

const Criminal = require("../Model/criminalModel");

//@desc get Criminal
//@routes GET api/Criminal

//@access Private
const getCriminal = asyncHandler(async (req, res) => {
  const criminals = await Criminal.find();
  res.status(200).json({ message: criminals });
  res.status(500).json({ message: error });
});

//@desc set Criminal
//@routes POST api/Criminal
//@access Private
const setCriminal = asyncHandler(async (req, res) => {
  const { name, Age, NoOffence, Address, Found, Descriptors } = req.body;

  // if (!name || !Age || !NoOffence) {
  //   res.status(400);
  //   throw new Error("Please fill required fields!");
  // }

  const criminal = await Criminal.create({
    name,
    Age,
    NoOffence,
    Found,
    // Image: {
    //   data: fs.readFileSync("uploads/" + req.file.filename),
    //   contentType: "image/png",
    // },
    Address,
    Descriptors,
  });
  res.status(200).json({ criminal });
});

//@desc update Criminal
//@routes PUT api/Criminal/:id
//@access Private
const updateCriminal = asyncHandler(async (req, res) => {
  const criminal = await Criminal.findById(req.params.id);
  if (!criminal) {
    res.status(400);
    throw new Error("Criminal not found");
  }
  const updateCriminal = await Criminal.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateCriminal);
});

//@desc Delete Criminal
//@routes DELETE api/Criminal/:id
//@access Private
const deleteCriminal = asyncHandler(async (req, res) => {
  const criminal = await Criminal.findById(req.params.id);
  if (!criminal) {
    res.status(400);
    throw new Error("criminal not found");
  }
  await criminal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getCriminal, setCriminal, updateCriminal, deleteCriminal };
