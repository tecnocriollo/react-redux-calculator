import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import calcReducer from './store/calcSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    calc: calcReducer
  },
});
