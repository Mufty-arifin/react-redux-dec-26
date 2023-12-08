import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    // nama state
    name: "counter",
    // initial state
    initialState: {
        value: 100,
    },
    //nama action untuk reducers
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;