export const logginIn = () => {
    return {
        type :'LOGGIN'
    };
}

export const newToken = (token) => {
    return {
        type : 'TOKEN',
        data : token
    }
}

export const user = (user) => {
    return {
        type : 'USER',
        data : user
    }
}