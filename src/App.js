import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component'
import {Route, Switch, Redirect} from 'react-router-dom'
import Shop from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import Authentication from './pages/authentication/Authentication.component'
import {useDispatch, useSelector} from 'react-redux'
import {selectCurrentUser} from './redux/user/user.selectors'
import CheckoutPage from './pages/checkout/CheckoutPage.component'
import {checkUserSession} from './redux/user/user.actions'

const App = (props) => {
    const dispatch = useDispatch()
    const pCurrentUser = useSelector(selectCurrentUser)
    // const pCollections = useSelector(selectCollectionsForPreview)

    // React.useEffect(() => {
    //     let unsub = auth.onAuthStateChanged(userAuth => {
    //         if(userAuth) {
    //             createUserProfileDocument(userAuth)
    //                 .then(userRef => {
    //                     userRef.onSnapshot(snapshot => {
    //                         dispatch(setCurrentUser({
    //                             id: snapshot.id,
    //                             ...snapshot.data()
    //                         }))
    //                     })
    //                 })
    //             return
    //         } else {
    //             dispatch(setCurrentUser(userAuth))
    //         }
    //     })
    //     dispatch(fetchCollectionsStart())
    //     return () => {
    //         console.log('Unsubscribing from auth events')
    //         unsub()
    //     }
    // }, [dispatch])

    // React.useEffect(() => {
    //     // Firebase setup
    //     addCollectionAndItems('collections',
    //         pCollections.map(({title, items}) => ({title, items})))
    // }, [pCollections])
    React.useEffect(() => {
        dispatch(checkUserSession())
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
