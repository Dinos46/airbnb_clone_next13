import { FormValues } from "../Models/User.model";
import { http } from "./apiService";

export const registerUser = (userInfo: FormValues) => {
  return http.post("/register", userInfo);
};
