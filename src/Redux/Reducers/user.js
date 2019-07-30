const initialState = JSON.parse(localStorage.getItem('user')) || {}

export const actionTypes = {
    LOGIN: 'user/LOGIN',
    LOGOUT: 'user/LOGOUT'
}

export default (prevState = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...action.data
            }
        case actionTypes.LOGOUT:
            return {}
        default:
            return prevState;
    }
}