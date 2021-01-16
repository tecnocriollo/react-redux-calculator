import {createSlice} from '@reduxjs/toolkit';
import {hasSymbol, calculateExpression} from './calcFuncs'



export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
      display: ""
    },
    reducers:{
        updateDisplay: (state, key) => { 
          if(!hasSymbol(key.payload) || 
            (hasSymbol(key.payload) && 
            state.display !== "" && 
            !hasSymbol(state.display[state.display.length - 1]))){
           return {...state, 
                   display: `${state.display}${key.payload}`}; 
           }
           return state;
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
          if(hasSymbol(state.display)){
            const result = calculateExpression(state.display)
            return {...state, 
              display: result.toString()}; 
          }  
          return state;
        }
    }
});

export const { updateDisplay, calcValue, clearDisplay, backSpace } = calcSlice.actions;


export const selectDisplay = state => state.calc.display;

export default calcSlice.reducer;
