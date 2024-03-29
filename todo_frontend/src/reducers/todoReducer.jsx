import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    TODO_ITEM_REQUEST,
    TODO_ITEM_SUCCESS,
    TODO_ITEM_FAIL,

    USER_LOGOUT,


    TODO_ITEM_DELETE_REQUEST,
    TODO_ITEM_DELETE_SUCCESS,
    TODO_ITEM_DELETE_FAIL,


    TODO_STATUS_UPDATE_REQUEST,
    TODO_STATUS_UPDATE_SUCCESS,
    TODO_STATUS_UPDATE_FAIL,

    ADD_TASK_ITEM_REQUEST,
    ADD_TASK_ITEM_SUCCESS,
    ADD_TASK_ITEM_FAIL,




    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
} from '../constants/todoConstants'




export const userLoginReducer = (state = {},action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        case USER_LOGOUT:
            return {}
        
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

export const todoDeleteReducer = (state = {},action) => {
    switch(action.type){
        case TODO_ITEM_DELETE_REQUEST:
            return {loading:true}
        case TODO_ITEM_DELETE_SUCCESS:
            return {loading:false,todoList:action.payload}
        case TODO_ITEM_DELETE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}


export const todoStatusUpdateReducer = (state = {},action) => {
    switch(action.type){
        case TODO_STATUS_UPDATE_REQUEST:
            return {loading:true}
        case TODO_STATUS_UPDATE_SUCCESS:
            return {loading:false,todoList:action.payload}
        case TODO_STATUS_UPDATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const addTaskReducer = (state = {},action) => {
    switch(action.type){
        case ADD_TASK_ITEM_REQUEST:
            return {loading:true}
        case ADD_TASK_ITEM_SUCCESS:
            return {loading:false,todoList:action.payload}
        case ADD_TASK_ITEM_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const registerUserReducer = (state = {},action) => {
    switch(action.type){
        case REGISTER_USER_REQUEST:
            return {loading:true}
        case REGISTER_USER_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case REGISTER_USER_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}