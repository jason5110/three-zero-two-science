import { configureStore } from '@reduxjs/toolkit'
import studentListReducer from '@/redux/slices/studentListStore'
// ...

export const store = configureStore({
  reducer: {
    studentList: studentListReducer,
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store