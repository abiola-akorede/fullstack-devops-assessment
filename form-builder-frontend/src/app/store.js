import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import formsReducer from "../features/forms/formsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    forms: formsReducer,
  },
});
