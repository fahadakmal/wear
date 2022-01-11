import {all, call, put, takeLatest} from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.actions'

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess () {
    yield takeLatest (UserActionTypes.SIGN_OUT_SCUCCESS,clearCartOnSignOut)
}

export default function* cartSaga(){
    yield all([call(onSignOutSuccess)])
}