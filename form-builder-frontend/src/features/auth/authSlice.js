import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axios"; 

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.post("/register", userData);
      localStorage.setItem("token", response.data.access_token);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


// LOGIN
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await API.post("/login", credentials);
      localStorage.setItem("token", response.data.access_token);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


// LOGOUT
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await API.post("/logout");
  localStorage.removeItem("token");
});


// const initialState = {
//   user: null,
//   token: null,
// };

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, token } = action.payload;
//       state.user = user;
//       state.token = token;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
