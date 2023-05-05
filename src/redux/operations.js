import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://642fd67cb289b1dec4bb2a03.mockapi.io/users";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(URL);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
