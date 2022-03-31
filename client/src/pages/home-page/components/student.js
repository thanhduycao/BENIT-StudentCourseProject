import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridAutoFlow: "column",
        gridAutoColumns: "1fr",
        background: "#d1d1e0",
        margin: "5px",
        padding: "10px 20px",
    },
    text: {
        margin: "6px",
        alignSelf: "flex-start"
    },
    titleName: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space - between"
    },
    studentCourse: {
        display: "flex",
        flexDirection: "column",
    },
    linkContainer: {
        textDecoration: "none",
        color: "black"
    },
    btn: {
        width: "20%",
        alignContent: "center",
        justifySelf: "self-end"
    }
}));

const Student = ({ student, linkToStudentPage, onDoubleClick, onDelete }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link to={`/${linkToStudentPage}/${student.id}`} className={classes.linkContainer}>
                <h3 className={classes.titleName}>
                    {student.studentName}{' '}
                </h3>
            </Link>
            <p className='text'>{student.age}</p>
            <div className={classes.studentCourse}>
                {student.courses.map((course) => (
                    <p className={classes.text}>{course}</p>
                ))}
            </div>
            <Button onClick={() => onDelete(student.id)} className={classes.btn}>
                <DeleteIcon />
            </Button>
        </div>
    )
}

export default Student