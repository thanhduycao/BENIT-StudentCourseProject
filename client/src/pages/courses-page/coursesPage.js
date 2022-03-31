import React from "react";
import { useState, useEffect } from 'react';
import NavBar from "../../components/navBar";
import Header from "../../components/Header";
import Courses from "./components/courses";
import AddOrEditCourse from "./components/addCourse";


export default function CoursePage() {
    const [courses, setCourses] = useState([]);
    const [showAddCourse, setShowAddCourse] = useState(false);

    useEffect(() => {
        const getCourses = async () => {
            const coursesFromServer = await fetchCourses();
            setCourses(coursesFromServer);
        }
        getCourses()
    }, [])

    //fetch Students
    const fetchCourses = async () => {
        const res = await fetch('http://localhost:3001/courses');
        const data = await res.json();

        return data;
    }

    //Add Student
    const addCourse = async (course) => {
        console.log({ course });
        setCourses([...courses, course]);
        const res = await fetch('http://localhost:3001/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course)
        })

        await fetchCourses();
        res.status === 200 ? alert("Adding course successfully") : alert("Error while adding");
        setShowAddCourse(false)
    }

    //delete student
    const deleteCourse = async (id) => {
        const res = await fetch(`http://localhost:3001/courses/${id}`, {
            // mode: "no-cors",
            method: 'DELETE',
        })
        res.status === 200
            ? setCourses(courses.filter((course) => course.id !== id))
            : alert('Error Deleting This Student')
        const data = await res.json()
        console.log(data)
    }

    //Update course
    const updateCourse = async (id, course) => {
        function editCourse(id, course, array) {
            let courseToEdit = array.find((course) => (course.id).toString() === id.toString())

            course = JSON.parse(course);
            courseToEdit.courseName = course.courseName;
            courseToEdit.text = course.text;
        }

        const res = await fetch(`http://localhost:3001/courses/${id}`, {
            // mode: "no-cors",
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: course
        })

        await fetchCourses();

        res.status === 200
            ? editCourse(id, course, ...courses)
            : alert('Error Updating This Student')

        const data = await res.json()
        console.log(data)
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <Header
                    title="Course Detail"
                    buttonText="Add Course"
                    showAdd={showAddCourse}
                    onAdd={() => setShowAddCourse(!showAddCourse)}
                />
                {showAddCourse && <AddOrEditCourse onAdd={addCourse} />}
                <Courses courses={courses} onDelete={deleteCourse} onUpdate={updateCourse} />
            </div>
        </div>
    );
}