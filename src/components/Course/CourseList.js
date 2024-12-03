import React from "react";
import AddButton from '../Utilities/AddIconButton'
import CourseCard from "./CourseCard";


const courses = [
    {
      id : 1,
      CourseName: 'MTE201',
      Time : '2024 Fall',
      Students: 40,
      Attendence: 70,
      Lectures : 6
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
   
  ]
  
  export default function CourseList({onRouteChange}) {
    return (
      <div className = "">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-center"> 
            <p className="text-2xl font-bold tracking-tight text-gray-900 mr-4">You have 8 courses in total </p>
            <AddButton/>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-1">
            {courses.map((course) => (
              <div key={course.id} className="">
                <CourseCard onRouteChange = {onRouteChange}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }