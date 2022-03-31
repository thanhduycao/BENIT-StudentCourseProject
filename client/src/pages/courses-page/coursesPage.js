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
        setCourses([...courses, course]);
        const res = await fetch('http://localhost:3001/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course)
        })
        console.log({ courses });
        let coursesT = await fetchCourses();
        console.log({ coursesT })
        setCourses(coursesT)
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
        let courseToUpdate = courses.find((course) => (course.id).toString() === id);
        console.log(courseToUpdate);
        courseToUpdate.courseName = course.courseName;
        courseToUpdate.text = course.text;

        console.log(courseToUpdate);
        console.log({ courses })
        setCourses(courses);
        const res = await fetch(`http://localhost:3001/courses/${id}`, {
            // mode: "no-cors",
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course)
        })

        await fetchCourses();

        res.status === 200
            ? alert("Update course successfully")
            : alert('Error Updating')

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