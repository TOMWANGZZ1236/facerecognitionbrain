import React from "react";

const HomeTitle = ({name}) => {
    return(
        <div className="ma4 mt0">
           <div className = 'white f3'> 
            {`${name}, checkout below to see your students' attendence!`}
           </div>
        </div>
    
    );
}


export default HomeTitle