import { takeLatest, put, all, call} from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {auth, createUserProfileDocument, getCurrentUser, googleProvider} from '../../firebase/firebase.utils'
import {
    signinFailure,
    signinSuccess, signOutFailure, signOutSuccess
} from './user.actions'

function* completeSigninProcess(userAuth, additionalDetails = null) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalDetails)
        const userSnapshot = yield userRef.get()
        yield put(signinSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch(error) {
        yield put(signinFailure(error))
    }
}

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield completeSigninProcess(user)
    } catch(error) {
        yield put(signinFailure(error))
    }
}

function* signinWithEmail({payload: { email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield completeSigninProcess(user)
    } catch(error) {
        yield put(signinFailure(error))
    }
}

function* checkUserSession() {
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return
        yield completeSigninProcess(userAuth)
    } catch (error) {
        yield put(signinFailure(error))
    }
}

function* registerUser({ payload: {email, password, additionalData} }) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword( email, password )
        yield completeSigninProcess(user, additionalData)
    } catch(error) {
        yield put(signinFailure(error))
    }
}

function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

function* onEmailSigninStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signinWithEmail)
}
function* onGoogleSigninStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}
function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession)
}
function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}
function* onRegisterStart() {
    yield takeLatest(UserActionTypes.REGISTER_START, registerUser)
}

export function* userSagas() {
    yield all([
        call(onGoogleSigninStart),
        call(onEmailSigninStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onRegisterStart)
    ])
}
