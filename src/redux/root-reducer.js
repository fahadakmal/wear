import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer } from 'redux-persist'

import userReducer from './user/user.reducer';
import cartRdeucer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    shitelist:['cart']
  }
const rootReducer= combineReducers({
    user:userReducer,
    cart:cartRdeucer
})
export default persistReducer(persistConfig,rootReducer)