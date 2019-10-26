import React from "react";
import { connect } from "react-redux";
import { layoutText } from "../../../utils/contants/layout";
import "../../App.scss";

function CountryCard({ country, loading, locale }) {
  let countryCapital = "";
  let countryPopulation = "";
  let countryFlagUrl = "";
  let countryName = "";

  if (country) {
    countryCapital = country.capital;
    countryPopulation = country.population;
    countryFlagUrl = country.flag;
    countryName = country.name;
  }

  return (
    <>
      {!loading && country ? (
        <div className={"country-card"}>
          <div className={'card-row'}>
            <div className={'title'}>
              {layoutText.COUNTRY_NAME[locale]}:
            </div>
            <div className={'content'}>
              {countryName}
            </div>
          </div>

          <div className={'card-row'}>
            <div className={'title'}>
              {layoutText.COUNTRY_FLAG[locale]}:
            </div>
            <div className={'content'}>
              {<img className={"flag"} src={countryFlagUrl} alt={"flag"} />}
            </div>
          </div>

          <div className={'card-row'}>
            <div className={'title'}>
              {layoutText.COUNTRY_CAPITAL[locale]}:
            </div>
            <div className={'content'}>
              {countryCapital}
            </div>
          </div>

          <div className={'card-row'}>
            <div className={'title'}>
              {layoutText.COUNTRY_POPULATION[locale]}:
            </div>
            <div className={'content'}>
              {countryPopulation}
            </div>
          </div>
        </div>
      ) : (
        <div>{layoutText.NO_DATA_MESSAGE[locale]}</div>
      )}
    </>
  );
}

export default connect(state => ({
  country: state.countryData,
  loading: state.loading,
  locale: state.locale,
}))(CountryCard);
