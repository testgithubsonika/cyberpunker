import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './user/UserSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
   }
})