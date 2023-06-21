import { configureStore} from '@reduxjs/toolkit'
import basketSlice from './basketSlice'
import userSlice from './userSlice';
import categorySlice from './categorySlice';
import productSlice from './productSlice';
import orderSlice from './orderSlice';

const store =configureStore({reducer:{
    user:userSlice,
    basket:basketSlice,
    category:categorySlice,
    product:productSlice,
    order:orderSlice,
}});
export default store;