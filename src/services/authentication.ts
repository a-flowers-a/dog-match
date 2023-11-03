//Agent
import HttppAgent from "./HtppAgent";
//Types & Consts
import { LoginData } from "../types/authentication";
import { BaseUrl } from "../constants/services";

/**
 * Performs a POST request to log in with the provided credentials
 * @param loginData name and email strings
 * @returns Promise void 200 if successfully logged in
 */
export function login(loginData: LoginData): Promise<void> {
  const url = `${BaseUrl}/auth/login`;
  const axiosAgent = HttppAgent.getAgent();
  return axiosAgent.doRequest({
    method: "POST",
    url,
    data: loginData,
    withCredentials: true,
  }) as Promise<void>;
}

/**
 * Performs a POST request to invalidate the auth cookie (user's session)
 * @returns Promise void
 */
export function logout(): Promise<void> {
  const url = `${BaseUrl}/auth/logout`;
  const axiosAgent = HttppAgent.getAgent();
  return axiosAgent.doRequest({
    method: "POST",
    url,
    withCredentials: true,
  }) as Promise<void>;
}
