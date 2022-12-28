import React, {useEffect} from 'react'
import { Route, useHistory } from 'react-router-dom'
import { Menu } from 'antd'
import { HomeOutlined, DashboardOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import Dashboard from './sidebar-components/Dashboard'
import Settings from './sidebar-components/Settings'
import Profile from './sidebar-components/Profile'
import Account from "./sidebar-components/Account"
import PrivateRoute from '../Private-route/PrivateRoute'


const MainContainer = (props) => {
    const history = useHistory()
  
    useEffect(() => {
        props.history.push("/account/home")
    },[props.history])

    return (
        <div className='main-container'>  
            <Menu
            onClick={({key}) => {
                history.push(key)
            }}
            items={[{label: "Home", key: "/account/home", icon:<HomeOutlined/> },
                    {label: "Dashboard", key: "/account/dashboard", icon:<DashboardOutlined/>}, 
                    {label: "Settings", key: "/account/settings", icon:<SettingOutlined/>}, 
                    {label: "Profile", key: "/account/profile", icon:<UserOutlined/>}]}

            selectedKeys={[props.location.pathname]}        
            
            >

            </Menu>
            <div className='main-items'>
                <PrivateRoute path='/account/home' component={Account}/>
                <PrivateRoute path='/account/dashboard' component={Dashboard} />
                <PrivateRoute path='/account/settings' component={Settings}/>
                <PrivateRoute path='/account/profile' component={Profile}/>
            </div>
           
        </div>
    )
}

export default MainContainer