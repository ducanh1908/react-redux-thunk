import axiosClient from "./axios-client";

const userApi = {
  getAll() {
    const url = "/users";
    return axiosClient.get(url);
  },
};

export default userApi;
