import { combineReducers, configureStore } from '@reduxjs/toolkit'
// 개별 리듀서를 가져옵니다
// import someReducer from './someReducer';
import userReducer from './user'

const rootReducer = combineReducers({
  // someReducer,
  // 다른 리듀서들을 여기에 추가하세요
  user: userReducer.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']

export default store
export { rootReducer }
