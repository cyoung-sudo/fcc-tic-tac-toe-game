import { createSlice } from '@reduxjs/toolkit';

export const chooseModeSlice = createSlice({
  name: 'chooseMode',
  initialState: {
    mode: 0,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
      console.log(`Mode set: ${state.mode} player(s)`);
    }
  }
});

// Action creators are generated for each case reducer function
export const { setMode } = chooseModeSlice.actions;

export default chooseModeSlice.reducer;