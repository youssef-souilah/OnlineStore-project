import { configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import categorySlice from './categorySlice';
import userSlice from './userSlice';
import orderSlice from './orderSlice';
import productSlice from './productSlice';

const store =configureStore({reducer:{
    auth:authSlice,
    user:userSlice,
    category:categorySlice,
    order:orderSlice,
    product:productSlice,
}});
export default store;