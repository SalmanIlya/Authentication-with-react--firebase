import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  User:{}
}

export const counterSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    getUser:(state,actions)=>{
        state.User=actions.payload
    },
    deleteUser:(state,actions)=>{
        state.User={}
    }

  }
})


export const {getUser,deleteUser } = counterSlice.actions

export default counterSlice.reducer