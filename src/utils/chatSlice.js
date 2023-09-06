import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

 const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
addMessage:(state,action)=>{
    state.messages.slice(10,1)
    state.messages.push(action.payload)
}
    }
 })

 export const {addMessage}=chatSlice.actions
 export default chatSlice.reducer