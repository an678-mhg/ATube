import axiosClient from "./axiosClient";

export const getChannelInfoApi = (id) => {
  return axiosClient.get(`/api/channel/${id}`);
};

export const getChannelVideoApi = (id, page) => {
  return axiosClient.get(`/api/channel/video/${id}?page=${page}`);
};
