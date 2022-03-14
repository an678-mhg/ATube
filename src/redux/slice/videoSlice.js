import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  checkLikeApi,
  getVideoByIdApi,
  likeVideoApi,
  unLikeApi,
  disLikeVideoApi,
  checkDisLikeVideoApi,
  unDisLikeApi,
} from "../../api/videoApi";

const initialState = {
  video: {},
  loading: false,
  videoRecomment: [],
  likeCount: 0,
  disLikeCount: 0,
  isLike: false,
  isDisLike: false,
  error: false,
};

export const getVideoById = createAsyncThunk("video/getById", async (id) => {
  const res = await getVideoByIdApi(id);
  return res.data;
});

export const likeVideo = createAsyncThunk("video/likeVideo", async (data) => {
  await likeVideoApi(data);
});

export const checkLike = createAsyncThunk(
  "video/check-like",
  async (videoId) => {
    const res = await checkLikeApi(videoId);
    return res.data;
  }
);

export const unLike = createAsyncThunk("video/un-like", async (videoId) => {
  await unLikeApi(videoId);
});

export const disLikeVideo = createAsyncThunk("video/dislike", async (data) => {
  await disLikeVideoApi(data);
});

export const checkDisLikeVideo = createAsyncThunk(
  "video/checkDislike",
  async (videoId) => {
    const res = await checkDisLikeVideoApi(videoId);
    return res.data;
  }
);

export const unDisLikeVideo = createAsyncThunk(
  "video/unDisLikeVideo",
  async (videoId) => {
    await unDisLikeApi(videoId);
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    clearVideo: (state) => {
      state.video = {};
      state.loading = false;
      state.videoRecomment = [];
      state.likeCount = 0;
      state.disLikeCount = 0;
      state.isLike = false;
      state.isDisLike = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVideoById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVideoById.fulfilled, (state, action) => {
      state.video = action.payload.video;
      state.loading = false;
      state.videoRecomment = action.payload.videoRecomment;
      state.likeCount = action.payload.likeCount;
      state.disLikeCount = action.payload.disLikeCount;
    });
    builder.addCase(getVideoById.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(likeVideo.fulfilled, (state) => {
      state.isLike = true;
      state.likeCount += 1;
    });
    builder.addCase(likeVideo.rejected, (state) => {
      state.isLike = false;
    });
    builder.addCase(checkLike.fulfilled, (state, action) => {
      state.isLike = action.payload.isLike;
    });
    builder.addCase(checkLike.rejected, (state) => {
      state.isLike = false;
    });
    builder.addCase(unLike.fulfilled, (state) => {
      state.isLike = false;
      state.likeCount -= 1;
    });
    builder.addCase(disLikeVideo.fulfilled, (state) => {
      state.isDisLike = true;
      state.disLikeCount += 1;
    });
    builder.addCase(checkDisLikeVideo.fulfilled, (state, action) => {
      state.isDisLike = action.payload.isDisLike;
    });
    builder.addCase(checkDisLikeVideo.rejected, (state) => {
      state.isDisLike = false;
    });
    builder.addCase(unDisLikeVideo.fulfilled, (state) => {
      state.isDisLike = false;
      state.disLikeCount -= 1;
    });
  },
});

export const { clearVideo } = videoSlice.actions;

export default videoSlice.reducer;
