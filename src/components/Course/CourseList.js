import React from "react";
import AddButton from '../Utilities/AddIconButton'
import CourseCard from "./CourseCard";


const products = [
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
  
  export default function CourseList() {
    return (
      <div className = "">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-center"> 
            <p className="text-2xl font-bold tracking-tight text-gray-900 mr-4">You have 8 courses in total </p>
            <AddButton/>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-1">
            {products.map((product) => (
              <div key={product.id} className="">
                {/* <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div> */}
                <CourseCard/>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }