import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMoreData = createAsyncThunk(
  'sample/fetchMoreData',
  async ({ limit, offset }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "limit": limit,
      "offset": offset
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 10,
  offset: 0,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoreData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoreData.fulfilled, (state, action) => {
        state.loading = false;
        const jdList = action.payload.jdList;
        if (Array.isArray(jdList)) {
          state.data = [...state.data, ...jdList];
          state.offset += state.limit;
        } else {
         
          console.error("Payload is not an array:", jdList);
        }
      })
      
      
      .addCase(fetchMoreData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
