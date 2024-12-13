import React from 'react';
import HomeTitle from '../Texts/HomeTitle';
import { useState } from 'react';
import CourseList from '../Course/CourseList';
import CourseDetail from '../Course/CourseDetail';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import AnimatedText from '../Texts/AnimatedText'
import CircularProgress from '../Stats/CircularProgress'
import 'react-circular-progressbar/dist/styles.css';
import brain from './Logo.png'



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

const GridPlaceholder = (component) => {
  return (
    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
      
    </div>
  );
};

const Dashboard = ({name, email, onRouteChangeParent}) => {
  const [DashboardStatus, setStatus] = useState('Home');
  const [selectedCourse, setSelectedCourse] = useState('');


  const onRouteChange = (route, selectedCourse = '') => {
    if (route === 'Home') {
      setStatus('Home');
    } else if (route === 'Courselist') {
      setStatus('Courselist');
    } else if (route === 'CourseDetail' && selectedCourse !== '') {
      setSelectedCourse(selectedCourse)
      setStatus('CourseDetail');
    }
    
  }
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
              <a href="https://github.com/TOMWANGZZ1236" className="flex ms-2 md:me-24">
                <img src={brain} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">SmartAttendence</span>
              </a>
            </div>
            {/* User Menu */}
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/5027/5027076.png" rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Tom</span>
                  <span className="block truncate text-sm font-medium">{email}</span>
                </Dropdown.Header>
                {/* <Dropdown.Item>My profile</Dropdown.Item> */}
                <Dropdown.Divider />
                <Dropdown.Item onClick={() =>{onRouteChangeParent('signin')}}>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              {/* <SidebarItem iconPath="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" label="Home" 
              onRouteChange={() => {setStatus('Home')}}/> */}
               <button onClick = {() => {setStatus('Home')}} className="flex items-center p-2 pr-16 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 ms-4 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" viewBox="0 0 50 50" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d= "M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
                  </svg>
                  <span className="flex-1 ms-10 mr-10 *:whitespace-nowrap">Home</span>
              </button>     
            </li>
            <li>
              <SidebarItem iconPath="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" label="My Courses" 
              onRouteChange={() => {setStatus('CourseList')}}/>
            </li>
            {/* Additional items */}
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14"> */}
        <div className="border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 rounded-lg dark:border-gray-700 mt-4">
              {
                (() => {if (DashboardStatus === 'Home') {
                return <HomeTitle name = {name}/> }
                else if (DashboardStatus === 'CourseList'){
                return <div> 
                {/* <div className="grid grid-cols-3 gap-4">
                  <GridPlaceholder />
                  <GridPlaceholder />
                  <GridPlaceholder />
                  
                </div> */}
                  <CourseList setSelectedCourse = {setSelectedCourse} email = {email} onRouteChange = {onRouteChange}/>
                </div>
                }
                else if (DashboardStatus === 'CourseDetail'){      
                  return <div> 
                  <CourseDetail email= {email} selectedCourse = {selectedCourse}/> 
                  </div>
                }
                })()
              }
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;


<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
</svg>