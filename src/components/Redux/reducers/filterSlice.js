import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {},
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      const payload = action.payload;
      if (Array.isArray(payload)) {
        state.filters = { ...state.filters, roles: payload };
      } else if (typeof payload === "object") {
        const label = Object.keys(payload)[0];
        state.filters = { ...state.filters, [label]: payload[label] };
      }
    },
    removeFilter: (state, action) => {
      const filterKey = action.payload;
      const { [filterKey]: removedFilter, ...restFilters } = state.filters;
      state.filters = restFilters;
    },
    clearFilters: (state) => {
      state.filters = {};
    },
    updateFilter: (state, action) => {
        const payload = action.payload;
        const label = Object.keys(payload)[0];
        state.filters = { ...state.filters, [label]: payload[label] };
      },
  },
});

export const { addFilter, removeFilter, clearFilters,updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
