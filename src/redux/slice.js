import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";

const handlePending = (state) => {
  state.users.isLoading = true;
};
const handleRejected = (state, action) => {
  state.users.isLoading = false;
  state.users.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.users.isLoading = false;
  state.users.error = null;
  state.users.items = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: {
      items: [],
      isLoading: false,
      error: null,
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(fetchUsers.fulfilled, handleFulfilled);
  },
});

export default usersSlice.reducer;
