import { useState } from 'react'

const AddOrEditCourse = ({ isAdd = true, updateId, onAdd, onUpdate }) => {
    const [courseName, setName] = useState('')
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!courseName) {
            alert('Please add a course name')
            return
        }

        const course = { courseName, text };

        if (isAdd)
            onAdd(course)
        else {
            onUpdate(updateId.toString(), course)
        }

        setName('')
        setText('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Course Name *</label>
                <input
                    type='text'
                    placeholder='Add Course'
                    value={courseName}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Discription</label>
                <input
                    type='text'
                    placeholder='Add Discription'
                    value={text}

                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <input type='submit' value={isAdd ? 'Add Course' : 'Edit Course'} className='btn btn-block' />
        </form>
    )
}

export default AddOrEditCourse