import axiosInstance from "./axiosInstance";
import uploadInstance from "./uploadInstance";
import api from "./api";

const userRequest = {
  getAllUsers: (params: String) => axiosInstance.get(api.USER_GET_ALL + "?" + params),
  getUser: (params: String) => axiosInstance.get(api.USER_GET(params)),
  createUser: (data: any) => axiosInstance.post(api.USER_CREATE, data),
  uploadImage: (data: any) => uploadInstance.post(api.USER_UPLOAD, data),
};

export { userRequest };
