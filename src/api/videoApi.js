import axiosClient from "./axiosClient";

export const getAllVideosApi = (page) => {
  return axiosClient.get(`/api/video?page=${page}`);
};

export const uploadVideoApi = (data) => {
  return axiosClient.post("/api/video", data);
};

export const getVideoByIdApi = (id) => {
  return axiosClient.get(`/api/video/${id}`);
};

export const likeVideoApi = (data) => {
  return axiosClient.post(`/api/video/like`, data);
};

export const checkLikeApi = (videoId) => {
  return axiosClient.get(`/api/video/like/check-like/${videoId}`);
};

export const unLikeApi = (videoId) => {
  return axiosClient.delete(`/api/video/un-like/${videoId}`);
};

export const disLikeVideoApi = (data) => {
  return axiosClient.post(`/api/video/dislike`, data);
};

export const checkDisLikeVideoApi = (videoId) => {
  return axiosClient.get(`/api/video/dislike/check-dislike/${videoId}`);
};

export const unDisLikeApi = (videoId) => {
  return axiosClient.delete(`/api/video/un-dislike/${videoId}`);
};

export const getVideoSubsrciptionApi = (page) => {
  return axiosClient.get(
    `/api/video/subsrciption/video-subsrciption?page=${page}`
  );
};

export const descViewApi = (videoId) => {
  return axiosClient.put(`/api/video/desc-view/${videoId}`);
};

export const getVideoTrendingApi = () => {
  return axiosClient.get("/api/video/xu-huong/trending");
};
