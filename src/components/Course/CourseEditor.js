import React, { useState } from 'react';
import { updateCourse } from '../../actions/index';
import { deleteCourse } from '../../actions/index';
import { useDispatch } from 'react-redux';

function CourseEditor({email, initialCourse }) {
    const oldCourseName = initialCourse.name
    const [course, setCourse] = useState({...initialCourse, email: email, oldName : oldCourseName});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const saveCourse = async () => {
        try {
            const response = await fetch('http://localhost:3001/courseUpdate', {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(course)
            });
            if (response.ok) {
                const {oldName, ...newCourse} = course
                dispatch(updateCourse(oldCourseName, newCourse));
                alert('Course updated successfully!');
            } else {
                throw new Error('Failed to update course');
            }
        } catch (error) {
            alert(error.message);
        }
    };


    const deleteC = async () => {
        try {
            const response = await fetch('http://localhost:3001/courseDelete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    name : oldCourseName
                })
            });
            if (response.ok) {
                console.log(oldCourseName);
                dispatch(deleteCourse(oldCourseName));
                alert('Course delete successfully!');
            } else {
                throw new Error('Failed to delete course');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div >
            <div>
                <label htmlFor="name">Course Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={course.name}
                    onChange={handleChange}
                    className="mb-2 ml-4"
                />
            </div>
            <div>
                <label htmlFor="time">Course Time:</label>
                <input
                    type="text"
                    id="time"
                    name="time"
                    value={course.time}
                    onChange={handleChange}
                    className="mb-2 ml-4"
                />
            </div>
            <div>
                <label htmlFor="students" className = "pr-4">#Students:</label>
                <input
                    type="number"
                    id="students"
                    name="students"
                    value={course.students}
                    onChange={handleChange}
                    className="mb-2 ml-4"
                />
            </div>
            <button onClick={saveCourse} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Save Changes
            </button>
            <button onClick={deleteC} className="p-2 ml-8 bg-red-500 text-white rounded hover:bg-red-600">
                Delete Course
            </button>
        </div>
    );
}

export default CourseEditor;
