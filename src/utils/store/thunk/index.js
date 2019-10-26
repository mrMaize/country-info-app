import {
  setCountriesData,
  setCountryName,
  setLoadingOff,
  setLoadingOn
} from "../actions";
import { getAllCountries, getCountriesByName } from "../../api/requests";

export const findCountryDataByNameFragment = countryFullNameFragment => {
  return async dispatch => {
    dispatch(setCountryName(countryFullNameFragment));
    dispatch(setLoadingOn());

    try {
      const countriesFound = await getCountriesByName(countryFullNameFragment);
      dispatch(setCountriesData(countriesFound));
    } catch (error) {
      dispatch(setLoadingOff());
      console.log(error.message);
    }
  };
};

export const loadAllCountries = () => {
  return async dispatch => {
    try {
      const allCountries = await getAllCountries();
      dispatch(setCountriesData(allCountries));
    } catch (error) {
      dispatch(setLoadingOff());
    }
  };
};
