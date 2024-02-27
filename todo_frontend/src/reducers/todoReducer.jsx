import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    TODO_ITEM_REQUEST,
    TODO_ITEM_SUCCESS,
    TODO_ITEM_FAIL,
} from '../constants/todoConstants'




export const userLoginReducer = (state = {},action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const todoReducer = (state = {},action) => {
    switch(action.type){
        case TODO_ITEM_REQUEST:
            return {loading:true}
        case TODO_ITEM_SUCCESS:
            return {loading:false,todoList:action.payload}
        case TODO_ITEM_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

