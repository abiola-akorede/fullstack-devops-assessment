import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // ✅ Make sure this is here

const API_URL = "http://localhost:8080/api/forms"; // ✅ Use correct backend URL

// Create Form
export const createForm = createAsyncThunk(
  "forms/createForm",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error creating form");
    }
  }
);

const formsSlice = createSlice({
  name: "forms",
  initialState: {
    forms: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createForm.pending, (state) => {
        state.loading = true;
      })
      .addCase(createForm.fulfilled, (state, action) => {
        state.loading = false;
        state.forms.push(action.payload);
      })
      .addCase(createForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default formsSlice.reducer; // ✅ don’t forget this
