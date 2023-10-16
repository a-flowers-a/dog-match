import HttppAgent from "./HtppAgent";
import { BaseUrl } from "../constants/services";
import { Dog, DogsIdsResponse } from "../types/dog";

/**
 * Performs GET reuest to get list of breeds
 * @returns Promise with array of strings
 */
export function getBreeds(): Promise<string[]> {
  const url = `${BaseUrl}/dogs/breeds`;
  const axiosAgent = HttppAgent.getAgent();
  return axiosAgent.doRequest({
    method: "GET",
    url,
    withCredentials: true,
  }) as Promise<string[]>;
}

/**
 * Performs GET request to get array of dogsIds that match the queries passed
 * @param queries query string formed with all parame queries desired
 * @returns Promise array of dogsIds
 */
export function getDogsIDs(
  queries: string,
  offset: number
): Promise<DogsIdsResponse> {
  const allQueries = queries ? `?${queries}&from=${offset}` : `?from=${offset}`;
  const url = `${BaseUrl}/dogs/search${allQueries}`;
  const axiosAgent = HttppAgent.getAgent();
  return axiosAgent.doRequest({
    method: "GET",
    url,
    withCredentials: true,
  }) as Promise<DogsIdsResponse>;
}

/**
 * Performs POST request to get the list of Dogs matching the
 * passed dogsIds
 * @param dogsIds array with the dog's ids to get
 * @returns Promise array of Dogs
 */
export function getDogs(dogsIds: string[]): Promise<Dog[]> {
  const url = `${BaseUrl}/dogs`;
  const axiosAgent = HttppAgent.getAgent();
  return axiosAgent.doRequest({
    method: "POST",
    url,
    withCredentials: true,
    data: dogsIds,
  }) as Promise<Dog[]>;
}
