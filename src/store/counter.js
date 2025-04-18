import {createSlice} from '@reduxjs/toolkit';
export const INCREMENT='increment';
const initialCounterState={counter:0,showCounter:true};
const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        INCREMENT(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter=state.counter+action.payload;

        },
        decrease(state,action){
            state.counter=state.counter-action.payload;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        },

    }
});
export const counterActions=counterSlice.actions;
export default counterSlice.reducer;