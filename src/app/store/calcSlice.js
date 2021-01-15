import {createSlice} from '@reduxjs/toolkit';

export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
      display: "",
      value: 0
    },
    reducers:{
        updateDisplay: (state, key) => {
           return {...state, 
                   display: `${state.display}${key}`}; 
        },
        calcValue: (state) => {

        }
    }
});

export const { updateDisplay, calcValue } = calcSlice.actions;

export const selectValue = state => state.calc.value;
export const selectDisplay = state => state.calc.display;

export default calcSlice.reducer;
