const express = require("express");
const homeAPI = require("../controllers/homeControllers.js");

const router = express.Router();

router.get('/', homeAPI.getStudents);

router.get('/:id', homeAPI.getStudent);

router.put('/:id', homeAPI.updateStudent);

router.post('/', homeAPI.createStudent);

router.delete('/:id', homeAPI.deleteStudent);

module.exports = router