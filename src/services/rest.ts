import axios from "axios";

const apiService = async (path: string, method: string, payload?: any) => {
  const baseUrl = "http://localhost:8080/api/v1";
  // localStorage.setItem(
  //   "token",
  //   JSON.stringify(
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjBmOTA1NDFlZjhiOWIwYzUyMGE4ZSIsImlhdCI6MTY2NzQ3NDgxMSwiZXhwIjoxNjY3NTYxMjExfQ.BufX-Rm6cvPzh1iK5kL79zIl-8GvBRKTZYPaZFUggxI"
  //   )
  // );
  const token = JSON.parse(localStorage.getItem("token") as string);
  //   if (!token) {
  //     return "Un-Authorize User";
  //   }
  const data = await axios({
    url: `${baseUrl}${path}`,
    method: method,
    data: payload,
    headers: {
      authorization: "Bearer " + token,
    },
  });
  return data;
};
interface IService {
  path: string;
  method: string;
  payload?: any;
}
export default apiService;
