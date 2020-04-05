import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBWP4ckOQqBIyd1cUudpxmJdfKbU4O707g",
    authDomain: "crwn-clothing-8bf12.firebaseapp.com",
    databaseURL: "https://crwn-clothing-8bf12.firebaseio.com",
    projectId: "crwn-clothing-8bf12",
    storageBucket: "crwn-clothing-8bf12.appspot.com",
    messagingSenderId: "74312687999",
    appId: "1:74312687999:web:23035dcdaecd4524ed3a4a"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(userAuth) {

        const userRef = firestore.doc(`users/${userAuth.uid}`),
            snapshot = await userRef.get()
        if(!snapshot.exists) {
            const { email, displayName, photoURL, phoneNumber } = userAuth,
                createdAt = new Date()
            try {
                await userRef.set({
                    displayName,
                    photoURL,
                    phoneNumber,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (e) {
                console.log(e)
            }
        }
        return userRef
    }
}
export default firebase
