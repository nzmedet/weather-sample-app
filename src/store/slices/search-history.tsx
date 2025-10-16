import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  city: string | undefined
}

const initialState: State = {
  city: undefined
}

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    setLastSearched: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    }
  }
})

export const { setLastSearched } = searchHistorySlice.actions
export default searchHistorySlice.reducer
