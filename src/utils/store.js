 
import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './AppSlice';
import CacheSlice from './CacheSlice';
import chatSlice from './chatSlice';
 const store=configureStore({
reducer:{
    app:AppSlice,
    search:CacheSlice,
    chat:chatSlice
},
 })
 export default store;