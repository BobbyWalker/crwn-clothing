import { all, call, takeLatest, put } from 'redux-saga/effects'
import {cartClear} from './cart.actions'
import UserActionTypes from '../user/user.types'

function* clearCart() {
    yield put(cartClear())
}

function* onSignoutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCart)
}

export function* cartSagas() {
    yield all([
        call(onSignoutSuccess)
    ])
}
