import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  cafe_id: number
}

const initialState: User = {
  cafe_id: 10,
}

const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserState(state, action: PayloadAction<User>) {
      state.cafe_id = action.payload.cafe_id
    },
  },
})

export const { setUserState } = userReducer.actions

export default userReducer
