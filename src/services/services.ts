import apiService from "./rest";

export const loginService = async (data: any) => {
  return await apiService("/auth", "post", data);
};

export const getUserProfile = async () => {
  return await apiService("/auth/profile", "get");
};
