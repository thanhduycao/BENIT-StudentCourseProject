const { v4: uuid } = require("uuid");

let listCourse = require("../../client/src/data/list-course.json");

exports.getCourses = (req, res) => {
    console.log(`Courses in the database: ${listCourse}`);
    res.send(listCourse);
}

exports.createCourse = (req, res) => {
    const course = req.body;
    console.log(req);

    listCourse.push({ ...course, id: uuid() });

    console.log(`Course [${course.courseName}] added to the database.`);
    res.status(200).send("CREATED COURSE");
};

exports.getStudent = (req, res) => {
    res.send(req.params.id)
};

exports.deleteCourse = (req, res, next) => {
    console.log(`course with id ${req.params.id} has been deleted`);
    listCourse = listCourse.filter((student) => (student.id).toString() !== req.params.id);
    // res.redirect(200, 'http://localhost:3001/');
    res.status(200).send("DELETED COURSE");
};

exports.updateCourse = (req, res) => {
    console.log("hello");
    const course = listCourse.find((course) => (course.id).toString() === req.params.id);

    course.courseName = req.body.courseName;
    course.text = req.body.text;

    console.log(`coursename has been updated to ${req.body.courseName}.text has been updated to ${req.body.text}`);
    res.status(200).send("UPDATED COURSE");
};
