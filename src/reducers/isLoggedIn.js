const isLoggedInReducer = (isLoggedIn = true, action) => {
    switch(action.type) {
        case 'ADD': 
            return isLoggedIn + 1
        case 'DELETE' :
            return isLoggedIn + 1
        case 'UPDATE' :
            return isLoggedIn + 1
        default :
            return isLoggedIn
    }
}

export default isLoggedInReducer;