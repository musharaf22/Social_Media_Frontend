import apiService from "./rest";

export const loginService = async (data: any) => {
  return await apiService("/auth", "post", data);
};
