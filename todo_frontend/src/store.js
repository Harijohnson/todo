import { userLoginReducer, todoReducer } from './reducers/todoReducer';
import { configureStore } from '@reduxjs/toolkit'; // Import applyMiddleware
import  {thunk}   from 'redux-thunk'; // Import thunk without default export

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  userInfo: { userInfo: userInfoFromStorage }
};

export default configureStore({
    reducer: {
        userInfo: userLoginReducer,
        todoList: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    preloadedState: initialState,
});
