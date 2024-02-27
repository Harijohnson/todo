// import { configureStore } from '@reduxjs/toolkit'
import {  userLoginReducer  ,
          todoReducer  ,} from './reducers/todoReducer'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import {thunk } from 'redux-thunk'


// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//   JSON.parse(localStorage.getItem('userInfo')) : null


// const initialState =  {

//   userLogin: { userInfo: userInfoFromStorage },
  

// }

// const middleware = [thunk]

// export default configureStore({


  
//   reducer: {
//     userInfo:userLoginReducer,
//     todoList  : todoReducer ,

//   },
// })



const reducer = combineReducers({
    userInfo:userLoginReducer,
    todoList  : todoReducer ,

})



const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null




const initialState =  {
  userLogin: { userInfo: userInfoFromStorage },
  

}



const middleware = [thunk]



const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))




export default store