import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component'
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import Authentication from './pages/authentication/Authentication.component'
import { auth } from './firebase/firebase.utils'

const App = () => {
    const [sCurrentUser, setCurrentUser] = React.useState(null)

    React.useEffect(() => {
        let unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return () => {
            console.log('Unsubscribing from auth events')
            unsub()
        }
    }, [])

    return (
        <div>
            <Header currentUser={sCurrentUser} />
            <Switch>
                <Route path={'/shop'} component={Shop}/>
                <Route path={'/signin'} component={Authentication}/>
                <Route path={'/'} component={HomePage}/>
            </Switch>
        </div>
    );
}

export default App;
