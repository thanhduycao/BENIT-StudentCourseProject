const { v4: uuid } = require("uuid");

let listStudent = require("../../client/src/data/list-student.json");

exports.getStudent = (req, res) => {
    const user = listStudent.find((user) => (user.id).toString() === req.params.id);
    res.send(user);
    res.status(200).send("GET STUDENT");
};

// const updateStudent = (req, res) => {
//     const user = users.find((user) => user.id === req.params.id);

//     user.username = req.body.username;
//     user.age = req.body.age;

//     console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
// };
