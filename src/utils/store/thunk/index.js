import {
  setCountriesData,
  setCountryData,
  setCountryName,
  setLoadingOff,
  setLoadingOn
} from "../actions";
import { getAllCountries, getCountriesByName } from "../../api/requests";

export const findCountryDataByNameFragment = countryName => {
  return async dispatch => {
    dispatch(setCountryName(countryName));
    dispatch(setLoadingOn());

    try {
      const countries = await getCountriesByName(countryName);
      const country = countries[0];

      dispatch(setCountryData(country));
    } catch (error) {
      dispatch(setLoadingOff());
      console.log(error.message);
    }
  };
};

export const loadAllCountryNames = () => {
  return async dispatch => {
    try {
      const allCountries = await getAllCountries();
      dispatch(setCountriesData(allCountries));
    } catch (error) {
      dispatch(setLoadingOff());
    }
  };
};
