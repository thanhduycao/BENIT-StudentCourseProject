import React from 'react';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: "flex",
        textAlign: "justify",
        maxWidth: "100%",
        paddingLeft: "8px",
        paddingRight: "8px"
        //border: "1px solid"
        //maxWidth: 300,
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const AddOrEditStudent = ({ isAdd = true, inforEditStudent, updateId, availableCourse, onAdd, onUpdate }) => {
    const classes = useStyles();

    const [studentName, setName] = useState('');
    const [age, setAge] = useState('');
    const [courses, setCourse] = useState([]);

    const handleChange = (event) => {
        setCourse(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault()

        if (!studentName || !age) {
            alert('Please add a course name')
            return
        }

        const addStudent = { studentName, age, courses };

        console.log(addStudent);
        console.log(typeof (JSON.stringify(addStudent)))
        if (isAdd) {
            onAdd(addStudent);
        }
        else {
            onUpdate(updateId, addStudent);
        }

        setName('')
        setAge('')
        setCourse([])
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Student Name *</label>
                <input
                    type='text'
                    placeholder={isAdd ? 'Add Student Name' : inforEditStudent.studentName}
                    value={studentName}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Student Age *</label>
                <input
                    type='number'
                    placeholder={isAdd ? 'Add Student Age' : inforEditStudent.age}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <label>Course</label>
                <FormControl variant='standard' size='medium' className={classes.formControl}>
                    {/* <InputLabel id="demo-mutiple-checkbox-label">Course</InputLabel> */}
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        displayEmpty
                        value={courses}
                        // label="Age"
                        onChange={handleChange}
                        input={<Input />}
                        renderValue={(selected) => {
                            if (!isAdd && selected.length === 0) {
                                return <em>{inforEditStudent.courses.map((course, index) => (
                                    <em>{course}{inforEditStudent.courses.length === (index + 1) ? "" : ","} </em>
                                ))
                                }</em>;
                            }
                            return selected.join(', ')
                        }
                        }
                        MenuProps={MenuProps}
                    >
                        {availableCourse.map((course) => (
                            <MenuItem key={course} value={course}>
                                <Checkbox checked={courses.indexOf(course) > -1} />
                                <ListItemText primary={course} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <input type='submit' value={isAdd ? 'Add Student' : 'Edit Student'} className='btn btn-block' />
        </form>
    )
}

export default AddOrEditStudent