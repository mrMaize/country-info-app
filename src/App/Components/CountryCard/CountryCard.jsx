import React from "react";
import { connect } from "react-redux";
import { layoutText } from "../../../utils/contants/layout";
import "../../App.scss";

function CountryCard({ country, locale }) {
  let countryCapital = (country && country.capital) || "";
  let countryPopulation = (country && country.population) || "";
  let countryFlagUrl = (country && country.flag) || "";
  let countryName = (country && country.name) || "";

  return (
    <>
      {country && (
        <div className={"country-card"}>
          <div className={"card-row"}>
            <div className={"title"}>{layoutText.COUNTRY_NAME[locale]}:</div>
            <div className={"content"}>{countryName}</div>
          </div>

          <div className={"card-row"}>
            <div className={"title"}>{layoutText.COUNTRY_FLAG[locale]}:</div>
            <div className={"content"}>
              {<img className={"flag"} src={countryFlagUrl} alt={"flag"} />}
            </div>
          </div>

          <div className={"card-row"}>
            <div className={"title"}>{layoutText.COUNTRY_CAPITAL[locale]}:</div>
            <div className={"content"}>{countryCapital}</div>
          </div>

          <div className={"card-row"}>
            <div className={"title"}>
              {layoutText.COUNTRY_POPULATION[locale]}:
            </div>
            <div className={"content"}>{countryPopulation}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default connect(state => ({
  country: state.currentCountry,
  loading: state.loading,
  locale: state.locale
}))(CountryCard);
