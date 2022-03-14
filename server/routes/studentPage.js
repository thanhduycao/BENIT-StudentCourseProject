const express = require("express")
const studentPageAPI = require("../controllers/studentPageControllers.js");

const router = express.Router();

router.get('/:id', homeAPI.getStudent);

module.exports = router