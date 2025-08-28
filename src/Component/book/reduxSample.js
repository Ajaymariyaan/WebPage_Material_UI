import { createSlice } from "@reduxjs/toolkit";

// Initial state (starting data)
const initialState = { value: 0 };

// Create a slice
const counterSlice = createSlice({
  name: "counter",           // slice name
  initialState,              // initial data
  reducers: {                // functions to change state
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    reset: (state) => { state.value = 0 }
  }
});

// Export actions and reducer
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
