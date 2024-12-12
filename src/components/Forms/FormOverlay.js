import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../actions/index';

function CourseFormOverlay({email, onClose }) {
    // State variables for each input field
    const [courseName, setCourseName] = useState('');
    const dispatch = useDispatch();
    const [courseTime, setCourseTime] = useState('');
    const [numberOfStudents, setNumberOfStudents] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCourse = {
            name: courseName,
            time : courseTime,
            students: parseInt(numberOfStudents, 10),
            attendance: 0,
            lectures : 0
          
        };
        dispatch(addCourse(newCourse));
        fetch('http://localhost:3001/courseCreate', {
            method : 'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email: email,
                name: courseName,
                time: courseTime,
                students: parseInt(numberOfStudents, 10) // Ensure the number of students is an integer
            })
          })
          
        onClose(); // Close the form after submission
    };

    return (
        <div className="overflow-y-auto fixed ml-56 inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
                <h3 className="text-center text-lg text-gray-900">Add New Course</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Course Name (e.g. MTE 201)" 
                        className="w-full p-2 mt-4 border rounded" 
                        required 
                        value={courseName} 
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Course Time (e.g. FALL 2024)" 
                        className="w-full p-2 mt-4 border rounded" 
                        required 
                        value={courseTime} 
                        onChange={(e) => setCourseTime(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Number of Students" 
                        className="w-full p-2 mt-4 border rounded" 
                        required 
                        value={numberOfStudents} 
                        onChange={(e) => setNumberOfStudents(e.target.value)}
                    />
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Add</button>
                </form>
                <button onClick={onClose} className="mt-3 w-full text-center text-sm text-gray-500">Cancel</button>
            </div>
        </div>
    );
}

export default CourseFormOverlay;
