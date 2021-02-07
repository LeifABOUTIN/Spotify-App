const isLoggedInReducer = (state = false, action) => {
    if(action.type === 'LOGGIN'){
        return state = true;
    }
    else{
        return state;
    }
}

export default isLoggedInReducer;