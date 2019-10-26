import { sendRequest } from "./runner";
import { API_HOST, requestTypes } from "./config";

export const getCountriesByName = (partialOrFullName = "") =>
  sendRequest(requestTypes.GET, {
    url: `${API_HOST}/name/${partialOrFullName}?fields=flag;population;capital`
  });

export const getCountryFlag = url =>
  sendRequest(requestTypes.GET, {
    url
  });

export const getAllCountries = () =>
  sendRequest(requestTypes.GET, {
    url: `${API_HOST}/all?fields=name`
  });
