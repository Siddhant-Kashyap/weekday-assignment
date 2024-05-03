import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action) => {
        state.filters = [];
        state.filters.push(...action.payload);
      },
    removeFilter: (state, action) => {
      state.filters = state.filters.filter(filter => filter !== action.payload);
    },
    clearFilters: (state) => {
      state.filters = [];
    },
  },
});

export const { addFilter, removeFilter, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;