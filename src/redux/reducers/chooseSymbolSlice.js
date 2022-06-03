import { createSlice } from '@reduxjs/toolkit';

export const chooseSymbolSlice = createSlice({
  name: 'chooseSymbol',
  initialState: {
    symbol: "",
  },
  reducers: {
    setSymbol: (state, action) => {
      state.symbol = action.payload;
      console.log(`Symbol set: ${state.symbol}`);
    }
  }
});

// Action creators are generated for each case reducer function
export const { setSymbol } = chooseSymbolSlice.actions;

export default chooseSymbolSlice.reducer;