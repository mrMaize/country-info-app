import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { layoutText } from "../../../utils/contants/layout";
import {
  findCountryDataByNameFragment,
  loadAllCountryNames
} from "../../../utils/store/thunk";
import "../../App.scss";
import Dropdown from "./Dropdown/Dropdown";

function Search({
  loading,
  locale,
  getCountryInfo,
  countryName,
  loadCountries,
  allCountries
}) {
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [options, setOptions] = useState([]);

  let countryFullNameFragment = countryName;

  const onchange = event => {
    countryFullNameFragment = event.target.value;

    const availableOptions = allCountries ? allCountries.reduce((newList, currentCountry) => {
      const countryName = currentCountry.name.toUpperCase();
      if (countryName.indexOf(countryFullNameFragment.toUpperCase()) !== -1) {
        return [...newList, countryName];
      } else {
        return newList;
      }
    }, []) : [];

    setOptions(availableOptions);

    !dropdownOpen && setDropDownOpen(true);
  };

  const selectCountryCallback = country => () => {
    setDropDownOpen(false);
    getCountryInfo(country);
  };

  useEffect(() => {
    !allCountries && loadCountries();
  });

  return (
    <>
      <div className={'search-container'}>
        <input
          className={'search-input'}
          placeholder={layoutText.SEARCH_PLACEHOLDER[locale]}
          type={"text"}
          defaultValue={countryName}
          onChange={onchange}
          onClick={() => setDropDownOpen(!dropdownOpen)}
          // onBlur={() => setDropDownOpen(false)}
        />{" "}
        {loading && <h1>{layoutText.LOADING[locale]}</h1>}
        {!loading && dropdownOpen && (
          <Dropdown
            selectCountryCallback={selectCountryCallback}
            options={options}
          />
        )}
      </div>
    </>
  );
}

export default connect(
  state => ({
    loading: state.loading,
    locale: state.locale,
    countryName: state.countryName,
    allCountries: state.allCountries
  }),
  dispatch => ({
    loadCountries: () => dispatch(loadAllCountryNames()),
    getCountryInfo: countryFullNameFragment =>
      dispatch(findCountryDataByNameFragment(countryFullNameFragment))
  })
)(Search);
