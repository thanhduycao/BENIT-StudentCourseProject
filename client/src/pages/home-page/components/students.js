import Student from "../components/student"
import { TablePagination } from "@material-ui/core"
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridAutoFlow: "column",
        gridAutoColumns: "1fr",
        //background: "#d1d1e0",
        margin: "5px",
        padding: "10px 20px",
        maxHeight: "3rem",
        background: "black",
        color: "white"
    },
    titleName: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space - between"
    },
    text: {
        display: "flex",
        alignItems: "center"
    },
    linkContainer: {
        textDecoration: "none",
        color: "black"
    },
    btn: {
        display: "flex",
        width: "20%",
        alignItems: "center",
        justifySelf: "self-end",
        marginRight: "5px"
    }
}));

const Students = ({ students, linkToStudentPage, onDoubleClick, onDelete }) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div>
            <div className={classes.root}>
                <h4 className={classes.titleName}>
                    Student Name
                </h4>
                <h4 className={classes.text}>Student Age</h4>
                <h4 className={classes.text}>
                    Courses
                </h4>
                <h4 className={classes.btn}>
                    Delete
                </h4>
            </div>

            <>
                {students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student, index) => (
                    <Student key={index} student={student} linkToStudentPage={linkToStudentPage} onDoubbleClick={onDoubleClick} onDelete={onDelete} />
                ))}
                <TablePagination
                    rowsPerPageOptions={[5, 15, 25]}
                    component="div"
                    count={students.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage} />
            </>
        </div>
    )
}

export default Students