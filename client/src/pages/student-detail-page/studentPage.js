import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";
import NavBar from "../../components/navBar";
import CustomButton from "../../components/Button";
import { useParams } from "react-router-dom";
import AddOrEditStudent from "../home-page/components/addStudent";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        maxWidth: "700px",
        margin: "30px auto",
        overflow: "auto",
        minHeight: "400px",
        border: "1px solid steelblue",
        padding: "30px",
        borderRadius: "5px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "black",
    },
    imgStyle: {
        width: "100%",
        height: "300px"
    },
    title: {
        fontSize: "2rem",
    }
}));

export default function StudentPage() {
    const classes = useStyles();
    const [student, setStudent] = useState({});
    const { id } = useParams();
    const [showEdit, setShowEdit] = useState(false);
    useEffect(() => {
        const getStudents = async (id) => {
            const studentsFromServer = await fetchStudents(id);
            setStudent(studentsFromServer);
        }
        try {
            getStudents(id);
        } catch (error) {
            console.log(error)
        }
    }, [])

    //fetch Students
    const fetchStudents = async (id) => {
        const res = await fetch(`http://localhost:3001/students/${id}`);
        const data = await res.json();

        return data;
    }

    const updateStudent = async (id, student) => {
        const res = await fetch(`http://localhost:3001/students/${id}`, {
            // mode: "no-cors",
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student)
        })
        res.status === 200 ? alert("Edit student successfully") : alert("Error edditing student");
        setStudent(student);
        setShowEdit(false);
        await fetchStudents();
    }

    console.log(student.courses)
    console.log(student)
    return (
        <div>
            <NavBar />
            <div className={classes.container}>
                <Grid container spacing={3} alignContent="flex-start">
                    <Grid item xs={12}>
                        <h className={classes.title}>Student Detail Information</h>
                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://wallpaperaccess.com/full/3408037.jpg" alt="Img source" className={classes.imgStyle} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}><strong>Student Name: </strong> {student.studentName}</Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}><strong>Student Age: </strong> {student.age}</Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <div>
                                    <p><strong>Enrolled courses: </strong></p>
                                </div>
                                <div className={classes.studentCourse}>
                                    {student.courses?.map((course) => (
                                        <p className={classes.text}>{course}</p>
                                    ))}
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <CustomButton
                                text={!showEdit ? "EDIT INFOR" : "CLOSE"}
                                color={!showEdit ? "black" : "red"}
                                onClick={() => setShowEdit(!showEdit)}
                            />
                        </Grid>
                        {showEdit && <AddOrEditStudent availableCourse={student.courses} inforEditStudent={student} isAdd={false} updateId={id} onUpdate={updateStudent} />}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}