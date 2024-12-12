const courseReducer = (courses = [], action) => {
    switch(action.type) {
        case 'INIT':
            return action.payload
        case 'ADD': 
            return [...courses, action.payload]
        case 'DELETE' :
            return courses.filter(course => 
                course.name !== action.payload
            );
            

        case 'UPDATE' :
            return courses.map(course => 
                course.name === action.payload.oldCourseName ? {...action.payload.newCourse} : course
            );

        default :
            return courses
    }
}

export default courseReducer;