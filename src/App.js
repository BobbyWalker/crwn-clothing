import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
        <Switch>
            <Route path={'/'} component={HomePage}/>
            <Route path={'*'} component={HomePage}/>
        </Switch>
    </div>
  );
}

export default App;
