import axiosInstance from "../configs/axiosInstance";

const APIOrder = {
  getListOrder: async ({ currentPage, pageSize }) => {
    try {
      const params = {};
      if (currentPage) params["page"] = currentPage;
      if (pageSize) params["pageSize"] = pageSize;
      const response = await axiosInstance.get("/v2/order", { params });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  getOrderReports: async ({ from, until }) => {
    try {
      const params = {};
      if (from) params["from"] = from;
      if (until) params["until"] = until;
      const response = await axiosInstance.get("/order/reports", { params });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  getCarsList: async (search) => {
    const response = await axiosInstance.get(`/v2/car${search}`);
    return response;
  },
  postCar: async (formData) => {
    const response = await axiosInstance.post("/car", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  },
  deleteCar: async (id) => {
    const response = await axiosInstance.delete(`/car/${id}`);
    return response;
  },
  editCar: async (id, formData) => {
    const response = await axiosInstance.put(`/car/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // const response = await axiosInstance.put(`/car/${id}`);
    return response;
  },
  getCarById: async (id) => {
    const response = await axiosInstance.get(`/car/${id}`);
    return response;
  },
};

export default APIOrder;
