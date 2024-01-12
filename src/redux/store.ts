import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/countSlice'
import { customLogger } from './middlewars/logger'



export const store = configureStore({
  reducer:{
    counter:counterSlice.reducer
  },
  middleware:(getDefacultMiddlewars)=>getDefacultMiddlewars().concat(customLogger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch