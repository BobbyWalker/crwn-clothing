import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component'
import {Route, Switch, Redirect} from 'react-router-dom'
import Shop from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import Authentication from './pages/authentication/Authentication.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'
import CheckoutPage from './pages/checkout/CheckoutPage.component'

const App = (props) => {
    const dispatch = useDispatch()
    const pCurrentUser = useSelector(selectCurrentUser)

    React.useEffect(() => {
        let unsub = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                createUserProfileDocument(userAuth)
                    .then(userRef => {
                        userRef.onSnapshot(snapshot => {
                            dispatch(setCurrentUser({
                                id: snapshot.id,
                                ...snapshot.data()
                            }))
                        })
                    })
                return
            } else {
                dispatch(setCurrentUser(userAuth))
            }
        })
        return () => {
            console.log('Unsubscribing from auth events')
            unsub()
        }
    }, [dispatch])

    return (
        <div>
            <Header/>
            <Switch>
                <Route path={'/shop'} component={Shop}/>
                <Route exact path={'/checkout'} component={CheckoutPage}/>
                <Route exact path={'/signin'} render={() =>
                    pCurrentUser ? <Redirect to={'/'}/> : <Authentication/>
                }/>
                <Route path={'/'} component={HomePage}/>
            </Switch>
        </div>
    );
}

export default App;
