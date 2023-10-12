import axios, { AxiosError, AxiosRequestConfig } from "axios";

/**
 * Basic Http agent using axios client implementing Singleton Pattern
 * @see https://github.com/axios/axios
 */
class HttppAgent {
  static agent: HttppAgent;

  /**
   * Main method with singleton logic: When the instance exists, return it
   * otherwise instantiate it
   */
  static getAgent(): HttppAgent {
    if (!HttppAgent.agent) {
      HttppAgent.agent = new HttppAgent();
    }
    return HttppAgent.agent;
  }

  /**
   * Performs request using axios client with the given config
   * @param requestConfig axios request config
   * @returns Promise with the response data or error message
   */
  doRequest(requestConfig: AxiosRequestConfig): Promise<unknown> {
    return new Promise((resolve, reject) => {
      axios(requestConfig)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error?.message);
        });
    });
  }
}

export default HttppAgent;
