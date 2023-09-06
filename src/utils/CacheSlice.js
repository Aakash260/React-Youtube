import { createSlice } from "@reduxjs/toolkit";

import React from 'react'

const CacheSlice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResult:(state,action)=>{
Object.assign(state,action.payload)
        },
    }
})
export const {cacheResult}=CacheSlice.actions
export default CacheSlice.reducer

