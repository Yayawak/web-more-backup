import { useDispatch } from 'react-redux'
import { configureStore, Store } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
