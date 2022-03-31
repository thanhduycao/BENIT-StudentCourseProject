import Course from "./course"

const Courses = ({ courses, onDelete, onUpdate }) => {
    return (
        <>
            {courses.map((course, index) => (
                <Course key={index} course={course} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
        </>
    )
}

export default Courses