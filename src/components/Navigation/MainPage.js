import React from 'react';
import HomeTitle from '../Rank/HomeTitle';
import { useState } from 'react';
import CourseList from '../Course/CourseList';


const SidebarItem = ({ iconPath, label, onRouteChange }) => {
  return (
    <button onClick = {onRouteChange} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <svg className="flex-shrink-0 ms-4 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
      </svg>
      <span className="flex-1 ms-10 mr-10 *:whitespace-nowrap">{label}</span>
    </button>
  );
};

const GridPlaceholder = () => {
  return (
    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
        </svg>
      </p>
    </div>
  );
};

const Dashboard = () => {
  const [DashboardStatus, setStatus] = useState('Home');
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Sidebar Button and Logo */}
            <div className="flex items-center justify-start rtl:justify-end">
              <button aria-label="Open sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                {/* Replace with appropriate icon */}
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">SmartAttendence</span>
              </a>
            </div>
            {/* User Menu */}
            <div className="flex items-center ms-3">
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <SidebarItem iconPath="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" label="Home" 
              onRouteChange={() => {setStatus('Home')}}/>
            </li>
            <li>
              <SidebarItem iconPath="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" label="My Courses" 
              onRouteChange={() => {setStatus('Yana')}}/>
            </li>
            {/* Additional items */}
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
          {
            (() => {if (DashboardStatus === 'Home') {
             return <HomeTitle name = 'Tom'/> }
            else {
             return <CourseList/>
            }
            })()
          }
        </div>
      </div>
    </>
  );
};

export default Dashboard;



