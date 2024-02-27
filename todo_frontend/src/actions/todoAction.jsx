import axios from 'axios'
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    TODO_ITEM_SUCCESS,
    TODO_ITEM_FAIL,
    TODO_ITEM_REQUEST,

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
        '/api/user/login/',
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





export const todoItem = () => async (dispatch) => {
    try{
        dispatch({
            type:TODO_ITEM_REQUEST,
        })
        const config = {
            headers:{
                'Content-type':'application/json'
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