import React from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home'
import MainContainer from './components/MainContainer'
import Register from "./components/user-auth/Register";
import Login from './components/user-auth/Login'
import PrivateRoute from './Private-route/PrivateRoute';

const App = (props) => {

  return (
    <div className="app-container">
        <Home/>

        <Route path='/login' component={Login} exact={true}/>
        <Route path='/register' component={Register} exact={true}/>
        <PrivateRoute path='/account' component={MainContainer} />    
    </div>
  );
}

export default App;
