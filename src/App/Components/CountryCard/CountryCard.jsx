import React from "react";
import { connect } from "react-redux";
import { layoutText } from "../../../utils/contants/layout";

function CountryCard({ country, loading, locale }) {
  let countryName = "";
  let countryCapital = "";
  let countryPopulation = "";
  let countryFlagUrl = "";

  if (country) {
    countryName = country.name;
    countryCapital = country.capital;
    countryPopulation = country.population;
    countryFlagUrl = country.flag;
  }

  return (
    <>
      {!loading && country ? (
        <>
          <div>
            {layoutText.COUNTRY_NAME[locale]}: {countryName}
          </div>
          <div>
            {layoutText.COUNTRY_FLAG[locale]}:{" "}
            {<img src={countryFlagUrl} alt={"flag"} />}
          </div>
          <div>
            {layoutText.COUNTRY_CAPITAL[locale]}: {countryCapital}
          </div>
          <div>
            {layoutText.COUNTRY_POPULATION[locale]}: {countryPopulation} чел
          </div>
        </>
      ) : (
        <div>{layoutText.NO_DATA_MESSAGE[locale]}</div>
      )}
    </>
  );
}

export default connect(state => ({
  country: state.countryData,
  loading: state.loading,
  locale: state.locale
}))(CountryCard);
