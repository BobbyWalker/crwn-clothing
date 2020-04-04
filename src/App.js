import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component'
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop.component'

function App() {
  return (
    <div>
        <Switch>
            <Route path={'/shop'} component={Shop}/>
            <Route path={'/'} component={HomePage}/>
        </Switch>
    </div>
  );
}

export default App;
