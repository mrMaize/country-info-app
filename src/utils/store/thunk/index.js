import {
  setAvailableCountries,
  setCountryName,
  setLoadingOff,
  setLoadingOn
} from "../actions";
import { getCountriesByName } from "../../api/requests";

export const findCountriesDataByNameFragment = countryName => {
  return async dispatch => {
    if (!Boolean(countryName)) {
      dispatch(setCountryName(countryName));
      dispatch(setAvailableCountries([]));
    } else {
      dispatch(setCountryName(countryName));
      dispatch(setLoadingOn());

      try {
        const countries = await getCountriesByName(countryName);
        dispatch(setAvailableCountries(countries));
      } catch (error) {
        dispatch(setLoadingOff());
        dispatch(setAvailableCountries([]));
        console.log(error.message);
      }
    }
  };
};
