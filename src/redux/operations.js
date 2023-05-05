import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const page = 1;

const URL = "https://642fd67cb289b1dec4bb2a03.mockapi.io/users";
const params = {
  completed: false,
  page: page,
  limit: 5,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(URL, { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
