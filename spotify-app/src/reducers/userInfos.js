const userInfos = (state = null, action) => {
    if(action.type === 'USER'){
        return action.data;
    }
    else{
        return state;
    }
}

export default userInfos;