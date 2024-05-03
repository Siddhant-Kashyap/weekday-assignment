import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataSlice';
import filterReducer from './reducers/filterSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    filter: filterReducer,
  },
});

export default store;