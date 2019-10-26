import {
  SET_COUNTRIES_DATA,
  SET_COUNTRIES_LOADING_OFF,
  SET_COUNTRIES_LOADING_ON,
  SET_COUNTRY_DATA,
  SET_COUNTRY_NAME,
  SET_LOCALE
} from "../../actionTypes";
import * as Cookie from "../../../helpers/cookie";
import { locales } from "../../../contants/layout";
import { LOCALE } from "../../../contants/locale";

const localeFromCookie = Cookie.getCookie(LOCALE);

const initialState = {
  loading: true,
  countryData: null,
  locale: localeFromCookie ? locales[localeFromCookie] : locales.RU,
  countryName: "",
  allCountries: null
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
      };
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
      };
    }

    default: {
      return state;
    }
  }
};
