const tokenReducer = (state = null, action) => {
    if(action.type === 'TOKEN'){
        return action.data;
    }
    else{
        return state;
    }
}

export default tokenReducer;