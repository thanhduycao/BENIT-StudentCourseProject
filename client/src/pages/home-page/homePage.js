import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import NavBar from "../../components/navBar";
import Students from "./components/students";
import AddOrEditStudent from "./components/addStudent";
import Header from "../../components/Header";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "auto",
        paddingBottom: "auto",
    },
    container: {
        maxWidth: "90%",
        margin: "30px auto",
        overflow: "auto",
        minHeight: "300px",
        border: "1px solid steelblue",
        padding: "30px",
        borderRadius: "5px",
    }
}));

export default function HomePage() {
    const classes = useStyles();

    const [students, setStudents] = useState([]);
    const [availableCourse, setAvailableCourse] = useState([]);
    useEffect(() => {
        const getStudents = async () => {
            const studentsFromServer = await fetchStudents();
            setStudents(studentsFromServer);
            // setAvailableCourse(studentsFromServer.courses)
            console.log(studentsFromServer);
        }
        const getCourses = async () => {
            const coursesFromServer = await fetchCourses();
            const courseArray = [];
            coursesFromServer.map((course) => (
                courseArray.push(course.courseName)
            ))
            setAvailableCourse(courseArray);
        }

        getStudents()
        getCourses()
    }, [])

    //fetch Students
    const fetchStudents = async () => {
        const res = await fetch('http://localhost:3001/students');
        const data = await res.json();

        return data;
    }

    const fetchCourses = async () => {
        const res = await fetch('http://localhost:3001/courses');
        const data = await res.json();

        return data;
    }

    //Add Student
    const addStudent = async (student) => {
        console.log({ student });
        setStudents([...students, student]);
        const res = await fetch('http://localhost:3001/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student)
        })

        await fetchStudents();

        res.status === 200 ? alert("Adding student succesfully") : alert("Error while adding");
    }

    //Delete student
    const deleteStudent = async (id) => {
        const res = await fetch(`http://localhost:3001/students/${id}`, {
            // mode: "no-cors",
            method: 'DELETE',
        })
        res.status === 200
            ? setStudents(students.filter((student) => student.id !== id))
            : alert('Error Deleting This Student')
        const data = await res.json()
        console.log(data)
    }

    const [showAddStudent, setShowAddStudent] = useState(false);
    return (
        <div>
            <NavBar />
            <div className={classes.container}>
                <Header
                    title="Student list"
                    buttonText="Add Student"
                    showAdd={showAddStudent}
                    onAdd={() => setShowAddStudent(!showAddStudent)} />
                {showAddStudent && <AddOrEditStudent availableCourse={availableCourse} onAdd={addStudent} />}
                <Students students={students} linkToStudentPage="student-page" onDelete={deleteStudent} />
            </div>
        </div>
    );
}