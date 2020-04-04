import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component'
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import Authentication from './pages/authentication/Authentication.component'

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route path={'/shop'} component={Shop}/>
            <Route path={'/signin'} component={Authentication}/>
            <Route path={'/'} component={HomePage}/>
        </Switch>
    </div>
  );
}

export default App;
