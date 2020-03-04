import {
  SET_AVAILABLE_COUNTRIES,
  SET_COUNTRIES_LOADING_OFF,
  SET_COUNTRIES_LOADING_ON,
  SET_COUNTRY_NAME,
  SET_CURRENT_COUNTRY,
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

export const setCountryName = countryName => ({
  type: SET_COUNTRY_NAME,
  countryName
});

export const setAvailableCountries = availableCountries => ({
  type: SET_AVAILABLE_COUNTRIES,
  availableCountries
});

export const setCurrentCountry = currentCountry => ({
  type: SET_CURRENT_COUNTRY,
  currentCountry
});
