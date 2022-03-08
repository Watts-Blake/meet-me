const { Venue } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
//------------------------------------------------------middle-ware------------------------------------------
const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const router = express.Router();

router.route("/").get(
  asyncHandler(async (req, res) => {
    console.log("fuck this shitttttttttttttttttttttttttttttt");
    const venues = await Venue.findAll();
    // const types = await Type.findAll();
    // const data = { venues, typ

    return res.json(venues);
  })
);

module.exports = router;
