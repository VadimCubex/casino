import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  img: "",
  name: "Brian",
  surname: "Robinson",
  username: "charlypricehelou",
  balance: 200,
};

const ProfileInfoSlice = createSlice({
  name: "profileInfo",
  initialState,
  reducers: {},
});

export default ProfileInfoSlice.reducer;
