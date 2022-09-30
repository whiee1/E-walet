import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// FUNKAR

export const getUser = createAsyncThunk("user/getUser", async () => {
  return await fetch(`https://randomuser.me/api/`).then((res) => res.json());
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",

    status: "",
  },
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      const { results } = action.payload;
      const { first, last } = results[0].name;
      state.userName = `${first.toUpperCase()} ${last.toUpperCase()}`;
      state.status = "Found data";
    },
    [getUser.pending]: (state, action) => {
      state.status = "loading data";
    },

    [getUser.rejected]: (state, action) => {
      state.status = "Failed to fetch data";
    },
  },
});

export default userSlice.reducer;
