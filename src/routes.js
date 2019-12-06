import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Home from './Components/Home/Home';

const routers = (
    <Switch>
        <Route path='/' component={App}/>
        <Route path='/home' component={Home}/>
    </Switch>
);


export default routers;