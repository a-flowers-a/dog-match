import axios, { AxiosRequestConfig } from "axios";

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
   * @returns Promise with the response data
   */
  async doRequest(requestConfig: AxiosRequestConfig): Promise<unknown> {
    const response = await axios(requestConfig);
    return response.data;
  }
}

export default HttppAgent;
