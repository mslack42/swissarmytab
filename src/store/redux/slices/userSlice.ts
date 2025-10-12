import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type UserState = {
  isTopBarMinimised: boolean;
  isNewUser: boolean; // Use this later to trigger any 'welcome' features
  isOptedInToBetaFeatures: boolean; // Use this later to hide things that might not work
};

const initialState: UserState = {
  isTopBarMinimised: false,
  isNewUser: true,
  isOptedInToBetaFeatures: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsTopBarMinimised: (state, action: PayloadAction<boolean>) => {
      state.isTopBarMinimised = action.payload;
    },
  },
});

export const isTopBarMinimised: (state: RootState) => boolean = (
  state: RootState,
) => {
  return state.user.isTopBarMinimised;
};

export const { setIsTopBarMinimised } = userSlice.actions;

export default userSlice.reducer;
