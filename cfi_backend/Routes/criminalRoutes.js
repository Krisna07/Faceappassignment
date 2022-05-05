const express = require("express");
const router = express.Router();
const {
  getCriminal,
  setCriminal,
  updateCriminal,
  deleteCriminal,
} = require("../Controller/CriminalController");

router.route("/").get(getCriminal).post(setCriminal);

router.route("/:id").put(updateCriminal).delete(deleteCriminal);
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
