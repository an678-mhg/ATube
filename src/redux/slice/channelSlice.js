import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getChannelInfoApi,
  getChannelVideoApi,
  updateUserApi,
} from "../../api/channelApi";

const initialState = {
  profile: {},
  videos: [],
  loading: false,
  error: false,
  subsrciptCount: 0,
  totalPage: 0,
};

export const getChannelInfo = createAsyncThunk(
  "channel/profile",
  async (id) => {
    const res = await getChannelInfoApi(id);
    return res.data;
  }
);

export const getChannelVideo = createAsyncThunk(
  "channel/videos",
  async ({ id, page }) => {
    const res = await getChannelVideoApi(id, page);
    return res.data;
  }
);

export const updatedUser = createAsyncThunk("channel/update", async (data) => {
  const res = await updateUserApi(data);
  return res.data;
});

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    clearVideo: (state) => {
      state.videos = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChannelInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getChannelInfo.fulfilled, (state, action) => {
      state.profile = action.payload.channel;
      state.subsrciptCount = action.payload.subsrciptionCount;
      state.loading = false;
    });
    builder.addCase(getChannelInfo.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getChannelVideo.fulfilled, (state, action) => {
      state.videos = [...state.videos, ...action.payload.videos];
      state.totalPage = action.payload.totalPage;
    });
    builder.addCase(getChannelVideo.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(updatedUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatedUser.fulfilled, (state, action) => {
      state.profile = { ...state.profile, ...action.payload.channel };
      state.loading = false;
    });
    builder.addCase(updatedUser.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { clearVideo } = channelSlice.actions;

export default channelSlice.reducer;
