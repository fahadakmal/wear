import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer } from 'redux-persist'

import userReducer from './user/user.reducer';
import cartRdeucer from './cart/cart.reducer';
import directoryReducer from './directory/direcotry.reducer';
import shopReducer from './shop/shop.reducer';
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
  }
const rootReducer= combineReducers({
    user:userReducer,
    cart:cartRdeucer,
    directory:directoryReducer,
    shop:shopReducer
})
export default persistReducer(persistConfig,rootReducer)