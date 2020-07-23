const express = require("express");
const router = express.Router();
const getTextLine = require("../controller/getTextLine");

router.post("/", getTextLine.rate);

module.exports = router;
