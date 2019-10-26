import {
  SET_COUNTRIES_DATA,
  SET_COUNTRIES_LOADING_OFF,
  SET_COUNTRIES_LOADING_ON,
  SET_COUNTRY_DATA,
  SET_COUNTRY_NAME,
  SET_LOCALE
} from "../actionTypes";

export const setLocale = locale => ({
  type: SET_LOCALE,
  locale
});

export const setLoadingOn = () => ({
  type: SET_COUNTRIES_LOADING_ON
});

export const setLoadingOff = () => ({
  type: SET_COUNTRIES_LOADING_OFF
});

export const setCountryData = countryData => ({
  type: SET_COUNTRY_DATA,
  countryData
});

export const setCountryName = countryName => ({
  type: SET_COUNTRY_NAME,
  countryName
});

export const setCountriesData = countriesData => ({
  type: SET_COUNTRIES_DATA,
  countriesData
});
