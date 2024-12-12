import React from "react";
import AddButton from '../Utilities/AddIconButton'
import CourseCard from "./CourseCard";
import CourseFormOverlay from '../Forms/FormOverlay'; 
import { useState } from 'react';
import { useSelector } from 'react-redux';

  
  export default function CourseList({email,onRouteChange }) {
    const [showForm, setShowForm] = useState(false); // State to toggle the form overlay
    const courses = useSelector(state => state.courses);
    const [oldCourses, setOldCourses] = useState(courses); 
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
      <div className>
        <div className="flex items-center justify-center">
            <p className="text-2xl font-bold tracking-tight text-gray-900 mr-4 font-greatvibes">{`You have ${courses.length} courses in total`}</p>
            <AddButton onClick={toggleForm}/> {/* Add onClick handler */}
        </div>  
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {showForm && <CourseFormOverlay email = {email} onClose={toggleForm} />}
          <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-1">
            {courses.map((course, index) => (
              <div key={index}>
                <CourseCard onSave= {setOldCourses} email = {email} course={course} onRouteChange={onRouteChange}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}