import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import infinityLoadSlice from "./slice/infinityLoadSlice";
import subsrciptionSlice from "./slice/subsrciptionSlice";
import videoSlice from "./slice/videoSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    video: videoSlice,
    sub: subsrciptionSlice,
    infinity: infinityLoadSlice,
  },
});
