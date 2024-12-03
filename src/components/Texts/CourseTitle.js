import React from "react";

const CourseTitle = ({CourseName, Term}) => {
    return(
        <div className="ma4 mt-10 mb-16">
            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {`${CourseName} - ${Term}`}
            </h2>
        </div>
    );
}


export default CourseTitle