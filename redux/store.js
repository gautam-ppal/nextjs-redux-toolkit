import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import categoryReducer from './slices/categorySlice';
export const store = configureStore({
    reducer:{counter:counterReducer,category:categoryReducer}
})