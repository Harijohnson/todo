import { configureStore } from '@reduxjs/toolkit'
import {  userLoginReducer  ,
          todoReducer  ,} from './reducers/todoReducer'



export default configureStore({


  
  reducer: {
    userInfo:userLoginReducer,
    todoList  : todoReducer ,

  },
})



