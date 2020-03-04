import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { layoutText } from "../../../utils/contants/layout";
import { findCountriesDataByNameFragment } from "../../../utils/store/thunk";
import "../../App.scss";
import Dropdown from "./Dropdown/Dropdown";
import { setCurrentCountry } from "../../../utils/store/actions";

function Search({
  locale,
  loading,
  currentCountry,
  countryName,
  setCurrentCountry,
  availableCountries,
  findCountriesBuNameFragment
}) {
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState(countryName);

  const onchange = ({ target }) => {
    let countryFullNameFragment = target.value;

    findCountriesBuNameFragment(countryFullNameFragment);

    setSearch(countryFullNameFragment);
  };

  const selectCountryCallback = country => () => {
    setDropDownOpen(false);
    setCurrentCountry(country);
  };

  useEffect(() => {
    if (currentCountry) {
      setSearch(currentCountry.name);
    }
  }, [currentCountry]);

  useEffect(() => {
    const availableOptions = availableCountries
      ? availableCountries.reduce((newList, currentCountry) => {
          if (
            currentCountry.name.toUpperCase().indexOf(search.toUpperCase()) ===
            0
          ) {
            return [...newList, currentCountry];
          } else {
            return newList;
          }
        }, [])
      : [];

    setOptions(availableOptions);
    !dropdownOpen && setDropDownOpen(true);
  }, [availableCountries]);

  return (
    <>
      <div className={"search-container"}>
        <input
          className={`search-input`}
          placeholder={layoutText.SEARCH_PLACEHOLDER[locale]}
          type={"text"}
          value={search}
          onChange={onchange}
          onClick={() => setDropDownOpen(!dropdownOpen)}
        />{" "}
        {dropdownOpen && Boolean(options.length) && (
          <Dropdown
            selectCountryCallback={selectCountryCallback}
            loading={loading}
            options={options}
            noOptionsMessage={layoutText.NOTHING_FOUND[locale]}
          />
        )}
      </div>
    </>
  );
}

export default connect(
  state => {
    const {
      loading,
      locale,
      currentCountry,
      allCountries,
      availableCountries
    } = state;

    return {
      loading,
      locale,
      currentCountry,
      allCountries,
      availableCountries
    };
  },
  dispatch => ({
    setCurrentCountry: country => dispatch(setCurrentCountry(country)),
    findCountriesBuNameFragment: fragment =>
      dispatch(findCountriesDataByNameFragment(fragment))
  })
)(Search);
