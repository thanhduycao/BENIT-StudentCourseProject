import DeleteIcon from '@material-ui/icons/Delete';
import { Edit } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import AddOrEditCourse from './addCourse';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    name: {

    },
    text: {

    }
}));

const Course = ({ course, onDelete, onUpdate }) => {
    //const classes = useStyles();
    const [showEdit, setShowEdit] = useState(false);

    function handleEdit() {
        setShowEdit(true);
    }
    function handleClose() {
        setShowEdit(false);
    }
    return (
        <div>
            <div
                className='name'
            >
                <h3>
                    {course.courseName}{' '}
                    <div>
                        <Button onClick={() => onDelete(course.id)} >
                            <DeleteIcon />
                        </Button>
                        <Button>
                            {showEdit ? <CloseIcon onClick={handleClose} /> : <Edit onClick={handleEdit} />}
                        </Button>
                    </div>
                </h3>
                <p className='text'>{course.text}</p>
            </div>
            {showEdit && <AddOrEditCourse isAdd={false} updateId={course.id} onUpdate={onUpdate} />}
        </div>
    )
}

export default Course