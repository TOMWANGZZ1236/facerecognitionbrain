import React, { useState } from 'react';
import CourseEditor from './CourseEditor';

const CourseCard = ({email, course, onRouteChange, onSave}) => {
    const [activeTab, setActiveTab] = useState('Main'); // Default to the 'Statistics' tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const statsData = [
        
        { value: course.attendance, label: 'Attendence' },
        { value: course.lectures, label: 'Lectures' },
        { value: course.students, label: 'Students' },
    ];

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" role="tablist">
                <li className="w-full">
                    <button onClick={() => handleTabClick('Main')} className={`inline-block w-full p-4 ${activeTab === 'Main' ? 'text-blue-600' : 'bg-gray-50 hover:bg-gray-100'} focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`} role="tab" aria-selected={activeTab === 'Main'}>Main</button>
                </li>
                <li className="w-full">
                    <button onClick={() => handleTabClick('Edit')} className={`inline-block w-full p-4 ${activeTab === 'Edit' ? 'text-blue-600' : 'bg-gray-50 hover:bg-gray-100'} focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`} role="Edit" aria-selected={activeTab === 'Edit'}>Edit</button>
                </li>
            </ul>
            <div className="border-t border-gray-200 dark:border-gray-600">
                {activeTab === 'Main' && (
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            {`${course.name}-${course.time}`}
                        </h2>
                        <dl className="grid grid-cols-1 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
                            {statsData.map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center">
                                    <dt className="mb-2 text-3xl font-extrabold">{item.value}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">{item.label}</dd>
                                </div>
                            ))}
                        </dl>
                        <button onClick = {() => {onRouteChange('CourseDetail', course)}} ontype="button" className="mt-16 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                            Upload today's lecture!
                        </button>
                    </div>
                    
                    
                )}
                {activeTab === 'Edit' && (
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                        <CourseEditor email = {email} initialCourse= {course}/>
                    </div>
                )}
            </div>
        </div>
    );
};



export default CourseCard;
