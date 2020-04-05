import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component'
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import Authentication from './pages/authentication/Authentication.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

const App = (props) => {
    const [sCurrentUser, setCurrentUser] = React.useState(null)

    React.useEffect(() => {
        let unsub = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                createUserProfileDocument(userAuth)
                    .then(userRef => {
                        userRef.onSnapshot(snapshot => {
                            setCurrentUser({
                                id: snapshot.id,
                                ...snapshot.data()
                            })
                        })
                    })
                return
            }
            setCurrentUser(userAuth)
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
                {!sCurrentUser &&
                <Route path={'/signin'} component={Authentication}/>}
                <Route path={'/'} component={HomePage}/>
            </Switch>
        </div>
    );
}

export default App;
