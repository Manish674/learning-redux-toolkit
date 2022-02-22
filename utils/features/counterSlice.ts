import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SliceState {
  value: 0;
}

const initialState: SliceState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counterslice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByValue: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, incrementByValue, decrement, decrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
