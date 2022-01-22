import axiosInstance from "./apiConfig";

const api = {
  user: {
    login: (data) => axiosInstance.post("/auth/login", data),
    logout: () => axiosInstance.post("/auth/logout"),
    get: () => axiosInstance.get("/user"),
    update: (userId, data) => axiosInstance.put(`/admin/users/${userId}`, data),
    store: (config) => axiosInstance.post("admin/users/", config),
  },
  chats: {
    get: (params) => axiosInstance.get("/admin/chats/all", { params: { ...params } }),
    getById: (id) => axiosInstance.get(`/admin/chats/${id}`),
    getMessages: (id) => axiosInstance.get(`/admin/chats/${id}/messages`),
    changeDoctor: ({ doctor_id, id }) =>
      axiosInstance.put("/admin/chats/reassign", { doctor_id, id }),
    closeChat: (id) => axiosInstance.put(`/admin/chats/close/${id}`),
  },
  reviews: {
    get: (params) => axiosInstance.get("/admin/reviews/all", { params: { ...params } }),
  },
  doctors: {
    get: (params) => axiosInstance.get("/admin/users/doctors/", { params: { ...params } }),
    getSimplifiedList: () => axiosInstance.get("/admin/doctors/simplify"),
  },
  users: {
    get: (params) => axiosInstance.get("/admin/users/clients", { params: { ...params } }),
  },
};

export default api;
