import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { layoutText } from "../../../utils/contants/layout";
import {
  findCountryDataByNameFragment,
  loadAllCountries
} from "../../../utils/store/thunk";
import "./Search.scss";
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

    const availableOptions = allCountries.reduce((newList, currentCountry) => {
      const countryName = currentCountry.name.toUpperCase();
      if (countryName.indexOf(countryFullNameFragment.toUpperCase()) !== -1) {
        return [...newList, countryName];
      } else {
        return newList;
      }
    }, []);

    setOptions(availableOptions);

    !dropdownOpen && setDropDownOpen(true);
  };

  const onSearchCountry = () => {
    getCountryInfo(countryFullNameFragment);
  };

  const selectCountryCallback = country => () => {
    console.log(country);
  };

  useEffect(() => {
    !allCountries && loadCountries();
  });

  console.log("dropdownOpen:  ", dropdownOpen);

  return (
    <>
      <div className={"search-container"}>
        <div>
          <input
            placeholder={layoutText.SEARCH_PLACEHOLDER[locale]}
            type={"text"}
            defaultValue={countryName}
            onChange={onchange}
            onClick={() => setDropDownOpen(!dropdownOpen)}
            onBlur={() => setDropDownOpen(false)}
          />{" "}
          {loading && <h1>{layoutText.LOADING[locale]}</h1>}
          <button onClick={onSearchCountry}>{layoutText.SEARCH[locale]}</button>
        </div>

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
    loadCountries: () => dispatch(loadAllCountries()),
    getCountryInfo: countryFullNameFragment =>
      dispatch(findCountryDataByNameFragment(countryFullNameFragment))
  })
)(Search);
