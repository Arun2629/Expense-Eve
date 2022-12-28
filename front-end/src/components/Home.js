import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { startGetUser } from '../actions/userAction'

const Home = (props) => {
    const dispatch = useDispatch()

    const redirectLogin = () => {
        props.history.push('/login')
    }

    const redirectAccount = () => {
        props.history.push('/account/home')
    }
  
    useEffect(() => {
            if (localStorage.getItem('exp-token')){
                dispatch(startGetUser(redirectLogin, redirectAccount))
            }else{
                redirectLogin()
            }
    },[dispatch])
    return (
        <div className='main'>
            <Link to='/login'></Link>     
            <Link to='/register'></Link>
        </div>
    )
}

export default withRouter(Home)