const express = require("express")
const courseAPI = require("../controllers/coursesControllers.js");

const router = express.Router();

router.get('/', courseAPI.getCourses);

router.put('/:id', courseAPI.updateCourse);

router.post('/', courseAPI.createCourse);

router.delete('/:id', courseAPI.deleteCourse);


module.exports = router