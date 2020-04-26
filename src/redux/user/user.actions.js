import UserActionTypes from './user.types'

export const googleSigninStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const signinSuccess = (currentUser) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: currentUser
})

export const signinFailure = (message) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: message
})

export const emailSigninStart = (email, password) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: { email, password}
})

export const emailRegisterStart = (email, password, additionalData) => ({
    type: UserActionTypes.REGISTER_START,
    payload: {
        email, password, additionalData
    }
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})
