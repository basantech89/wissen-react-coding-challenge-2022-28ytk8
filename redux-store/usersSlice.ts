import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../utils';

const initialState = {
  users: [],
  status: 'idle',
  error: null,
};

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => await fetchUsers()
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = state.users.concat(action.payload);
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;

export const selectAllusers = (state) => state.users;
