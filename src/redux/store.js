import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer, registerReducer } from './reducers/authReducer';

const reducer = combineReducers({
    userLogin: loginReducer,
    userRgister: registerReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools({ mageAge: 200 })(applyMiddleware(...middleware)));

export default store;
