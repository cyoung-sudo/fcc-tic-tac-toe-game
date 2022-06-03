import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    display: "mode",
  },
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
      console.log(`Display changed: ${state.display}`);
    }
  }
});

// Action creators are generated for each case reducer function
export const { setDisplay } = appSlice.actions;

export default appSlice.reducer;