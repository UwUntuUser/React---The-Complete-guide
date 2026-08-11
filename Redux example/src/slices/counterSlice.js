import createSlice from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementBy(state, action) {
            state.counter = state.counter + action.payload;
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;