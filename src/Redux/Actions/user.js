import {actionTypes} from '../Reducers/user'

const login = (data) => {
    return {
        type: actionTypes.LOGIN,
        data: {
            ...data
        }
    }
}

const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export {
    login,
    logout
}