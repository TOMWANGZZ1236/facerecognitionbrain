import React from "react";

const HomeTitle = ({name}) => {
    return(
        <p class="text-center text-3xl font-400 leading-loose text-gray-900 dark:text-white">
            {`Hello ${name}, Welcome to SmartAttendence, we are here to help you manage your students' attendence`}</p>
    );
}


export default HomeTitle