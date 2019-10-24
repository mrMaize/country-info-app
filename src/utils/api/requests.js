import { sendRequest } from "./runner";
import { API_HOST, requestTypes } from "./config";

export const getCountriesByName = (partialOrFullName = "jjj") =>
  sendRequest(requestTypes.GET, {
    url: `${API_HOST}/name/${partialOrFullName}`
  });
