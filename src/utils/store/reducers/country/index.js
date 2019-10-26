import {
  LOAD_ALL_COUNTRIES,
  SET_COUNTRIES_DATA,
  SET_COUNTRIES_LOADING_OFF,
  SET_COUNTRIES_LOADING_ON,
  SET_COUNTRY_DATA, SET_COUNTRY_NAME,
  SET_LOCALE
} from "../../actionTypes";
import { locale } from "../../../contants/layout";

const initialState = {
  loading: true,
  countyData: null,
  foundCountries: [],
  locale: locale.RU,
  countryName: '',
  allCountries: null,
  countriesByName: null,

};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE: {
      return {
        ...state,
        locale: action.locale
      };
    }

    case SET_COUNTRY_DATA: {
      return {
        ...state,
        countryData: action.countryData,
        loading: false
      };
    }

    case SET_COUNTRY_NAME: {
      return {
        ...state,
        countryName: action.countryName
      }
    }

    case SET_COUNTRIES_LOADING_ON: {
      return {
        ...state,
        loading: true
      };
    }

    case SET_COUNTRIES_LOADING_OFF: {
      return {
        ...state,
        loading: false
      };
    }

    case SET_COUNTRIES_DATA: {
      return {
        ...state,
        allCountries: action.countriesData,
        loading: false
      }
    }

    default: {
      return state;
    }
  }
};
