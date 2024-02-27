import { configureStore } from '@reduxjs/toolkit'
import {  userLoginReducer  ,
          todoReducer  ,} from './reducers/todoReducer'

import {thunk } from 'redux-thunk'



export default configureStore({
  reducer: {
    userInfo:userLoginReducer,
    todoList  : todoReducer ,

  },
})



const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const initialState =  {

  userLogin: { userInfo: userInfoFromStorage },
  

}

const middleware = [thunk]
