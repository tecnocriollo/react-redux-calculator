import {createSlice} from '@reduxjs/toolkit';

const isSymbol = (chr) => {
return chr.search(/[+\-*/]/) !== -1
}



export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
      display: ""
    },
    reducers:{
        updateDisplay: (state, key) => { 
          if(!isSymbol(key.payload) || 
            (isSymbol(key.payload) && 
            state.display !== "" && 
            !isSymbol(state.display[state.display.length - 1]))){
           return {...state, 
                   display: `${state.display}${key.payload}`}; 
           }
           else return state;
        },
        clearDisplay: (state) => {          
           return {...state, 
                   display: ""}; 
        },
        backSpace: (state) => {
          return {...state, 
            display: state.display.slice(0, state.display.length -1)}; 
        },
        calcValue: (state) => {
          
        }
    }
});

export const { updateDisplay, calcValue, clearDisplay, backSpace } = calcSlice.actions;


export const selectDisplay = state => state.calc.display;

export default calcSlice.reducer;
