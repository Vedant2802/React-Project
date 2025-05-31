import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  inputValue: null,
};

const firstSlice = createSlice({
  name: "New",
  initialState,
  reducers: {
    storeInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { storeInputValue } = firstSlice.actions;
export default firstSlice.reducer;
