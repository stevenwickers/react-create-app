import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import index from './index';

class App extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={index} />
                    <Route path='/home' component={Home}/>
                </Switch>
                <div>
                    This is a mobX test app...
                </div>
            </div>
        )
    }
}

export default App;