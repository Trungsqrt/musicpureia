import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: [],
};

export const tracksSlice = createSlice({
   name: "TracksStorage",
   initialState,
   reducers: {
      add: (state, payload) => {
         state.value = [...{ ...payload }.payload];
      },
   },
});

export const { add } = tracksSlice.actions;
export default tracksSlice.reducer;
