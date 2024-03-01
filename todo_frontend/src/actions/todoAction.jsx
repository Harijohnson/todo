import axios from 'axios'
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    TODO_ITEM_SUCCESS,
    TODO_ITEM_FAIL,
    TODO_ITEM_REQUEST,

    USER_LOGOUT,

    TODO_ITEM_DELETE_REQUEST,
    TODO_ITEM_DELETE_SUCCESS,
    TODO_ITEM_DELETE_FAIL,


    TODO_STATUS_UPDATE_REQUEST,
    TODO_STATUS_UPDATE_SUCCESS,
    TODO_STATUS_UPDATE_FAIL,


} from '../constants/todoConstants'



export  const  userLogin = (email,password) => async (dispatch) => {
    try{
        dispatch({
            type:USER_LOGIN_REQUEST,
    })
    const config = {
        headers:{
            'Content-type':'application/json'
        }

    }
    const {data} = await axios.post(
        '/api/todo/login/',
        {'username':email,'password':password},config
        )
  
    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload:data,
        
        
    })


    localStorage.setItem('userInfo',JSON.stringify(data))
    
    
    

    }
    catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
            ?
            error.response.data.detail:
            error.detail,
        })
    }
}





export const todoItem = (userInfo) => async (dispatch) => {
    try{
        dispatch({
            type:TODO_ITEM_REQUEST,
        })

        const config = {
            headers:{
                'Content-type':'application/json', 
                Authorization  :`Bearer ${userInfo.token}`
            }
    
        }
        const {data} = await axios.get(
            '/api/todo/list/',
            config,
            )
        
        dispatch({
            type: TODO_ITEM_SUCCESS,
            payload:data,
        })
    }
    catch (error){
        dispatch({
            type: TODO_ITEM_FAIL,
            payload:error.response && error.response.data.detail
            ?
            error.response.data.detail:
            error.detail,
        })
    }
}



export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT,
    })
}


// deleet the item

export const todoDeleteItem = (userInfo,pk) => async (dispatch) => {
    try{
        dispatch({
            type:TODO_ITEM_DELETE_REQUEST,
        })

        const config = {
            headers:{
                'Content-type':'application/json', 
                Authorization  :`Bearer ${userInfo.token}`
            }
    
        }
        const {data} = await axios.delete(
            `/api/todo/delete/${pk}/`,
            config,
            )
        
        dispatch({
            type: TODO_ITEM_DELETE_SUCCESS,
            payload:data,
        })
    }
    catch (error){
        dispatch({
            type: TODO_ITEM_DELETE_FAIL,
            payload:error.response && error.response.data.detail
            ?
            error.response.data.detail:
            error.detail,
        })
    }
}


// update the status


export const todoUpdateStatus = (userInfo,pk,statusvalue) => async (dispatch) => {
    try{
        dispatch({
            type:TODO_STATUS_UPDATE_REQUEST,
        })


        const requestData = { status: statusvalue }; // Create an object with 'status' key


        const config = {
            headers:{
                'Content-type':'application/json', 
                Authorization  :`Bearer ${userInfo.token}`
            }
    
        }
        const {data} = await axios.patch(
            `/api/todo/update/${pk}/`,
            requestData,
            config,
            )
        
        dispatch({
            type: TODO_STATUS_UPDATE_SUCCESS,
            payload:data,
        })
    }
    catch (error){
        dispatch({
            type: TODO_STATUS_UPDATE_FAIL,
            payload:error.response && error.response.data.detail
            ?
            error.response.data.detail:
            error.detail,
        })
    }
}
