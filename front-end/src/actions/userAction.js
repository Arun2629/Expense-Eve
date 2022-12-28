import axios from 'axios'
import swal from 'sweetalert'



export const startRegistertUser = (formData, redirect) => {

    return (dispatch) => {
        axios.post('http://localhost:3055/users/register', formData)
            .then((response) => {
                const data = response.data
                if(data.hasOwnProperty('errors')){
                    alert(data.errors)
                }else{
                    swal('Successfully Registered')
                        .then((value) => {
                            redirect()
                        });
                                    
                 }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startLoginUser = (formData, redirect) => {

    return (dispatch) => {
        axios.post('http://localhost:3055/users/login', formData)
        .then((response) => {
            const data = response.data
            if(data.hasOwnProperty('errors')){
                alert(data.errors)
            }else{
                localStorage.setItem('exp-token', data.token)
                dispatch(setUser(data.user))
                redirect()

            }
            
        })
        .catch((err) => {
            alert(err.message)
        })
    }
   
}

export const startGetUser = (redirectLogin, redirectAccount) => {

    return (dispatch) => {
        axios.get('http://localhost:3055/users/account', {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
        .then((response) => {
            const data = response.data
            if(data.hasOwnProperty('errors')){
                alert(data.errors)
                dispatch(setUser({}))
                redirectLogin()

            }else{
                dispatch(setUser(data))
                redirectAccount()
                
            }
            
        })
    }
}

export const setUser = (data) => {
    return {
        type: 'SET_USER',
        payload: data
    }
}