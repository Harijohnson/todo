import axios from 'axios'



export  const  login = (email,password) => async (dispatch) => {
    try{
    const config = {
        headers:{
            'Content-type':'application/json'
        }

    }
    const {data} = await axios.post(
        '/api/user/login',
        {'username':email,'password':password},config
        )
    
    dispatch({
        payload:data,
    })


    localStorage.setItem('userInfo',JSON.stringify(data))

    }
    catch(error){
        dispatch({
            payload:error.response && error.response.data.detail
            ?
            error.response.data.detail:
            error.detail,
        })
    }
}





export const todoItem = () => async (dispatch) => {
    try{
        const config = {
            headers:{
                'Content-type':'application/json'
            }
    
        }
        const {data} = await axios.post(
            '/api/todo/list',
            {},config
            )
        
        dispatch({
            payload:data,
        })
    }
    catch{
        dispatch({
            payload:error.response && error.response.data.detail
            ?
            error.response.data.detail:
            error.detail,
        })
    }
}