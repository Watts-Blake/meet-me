const { Type } = require("../../db/models");

//------------------------------------------------------middle-ware------------------------------------------
const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.route("/").get(
  asyncHandler(async (req, res) => {
    const types = await Type.findAll();
    return res.json(types);
  })
);

module.exports = router;
