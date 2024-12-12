export const addCourse = course => ({
    type: 'ADD',
    payload: course
});
export const initializeCourse = course => ({
    type: 'INIT',
    payload: course
});

export const deleteCourse = (oldCourseName) => ({
    type: 'DELETE',
    payload: oldCourseName
});

export const updateCourse = (oldCourseName, newCourse) => ({
    type: 'UPDATE',
    payload: {
        oldCourseName : oldCourseName,
        newCourse : newCourse
    }
});
