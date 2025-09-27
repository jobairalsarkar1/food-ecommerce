import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "@/lib/types";

interface AuthState {
  token: string | null;
  user: UserProfile["data"] | null;
}

// Load from localStorage
const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
const user = typeof window !== "undefined" && localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")!)
  : null;

const initialState: AuthState = {
  token,
  user,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: UserProfile["data"] }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
