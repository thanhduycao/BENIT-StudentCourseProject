const { v4: uuid } = require("uuid");

let listStudent = require("../../client/src/data/list-student.json");

exports.getStudents = (req, res) => {
    console.log(`Users in the database: ${listStudent}`);
    res.send(listStudent);
}

exports.createStudent = (req, res) => {
    const student = req.body;
    console.log(student);
    console.log(req);

    listStudent.push({ ...student, id: uuid() });

    console.log(`User [${student.studentName}] added to the database.`);
    res.status(200).send("CREATED STUDENT");
};

exports.getStudent = (req, res) => {
    const user = listStudent.find((user) => (user.id).toString() === req.params.id);
    res.send(user);
    res.status(200).send("CREATED STUDENT");
};

exports.deleteStudent = (req, res, next) => {
    console.log(`user with id ${req.params.id} has been deleted`);
    listStudent = listStudent.filter((student) => (student.id).toString() !== req.params.id);
    // res.redirect(200, 'http://localhost:3001/');
    res.status(200).send("DELETED STUDENT");
};

exports.updateStudent = (req, res) => {
    let student = listStudent.find((student) => student.id == req.params.id);
    console.log(student);
    student.studentName = req.body.studentName;
    student.age = req.body.age;
    student.courses = req.body.courses;

    console.log(`username has been updated to ${req.body.studentName}.age has been updated to ${req.body.age}`)
    res.status(200).send("DELETED STUDENT");
};
