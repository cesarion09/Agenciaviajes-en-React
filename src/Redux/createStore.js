import { createStore, combineReducers } from 'redux';
import userReducer from './Reducers/user';

export default () => {
    return createStore(
        combineReducers({
//            user: todosReducer,
            user: userReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        )
}