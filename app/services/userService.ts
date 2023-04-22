import { FormValues } from "../Models/UserModel";
import { http } from "./apiService";

export const registerUser = (userInfo: FormValues) => {
  return http.post("/register", userInfo);
};
