import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    synchronizeAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, synchronizeAmount } = counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: Function) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
export const selectCount = (state: counterState) => {
  return state.counter.value;
};
export default counterSlice.reducer;
