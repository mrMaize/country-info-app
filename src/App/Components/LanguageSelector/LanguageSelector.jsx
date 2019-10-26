import React from "react";
import { connect } from "react-redux";
import { setLocale } from "../../../utils/store/actions";
import "../../App.scss";
import * as Cookie from "../../../utils/helpers/cookie";
import { LOCALE } from "../../../utils/contants/locale";
import {locales} from "../../../utils/contants/layout";

export default connect(
  state => ({ locale: state.locale }),
  dispatch => ({
    setLocale: locale => dispatch(setLocale(locale))
  })
)(({ setLocale, locale }) => {
  const changeLocale = event => {
    const locale = event.target.value;
    Cookie.setCookie(LOCALE, locale);
    setLocale(locale);
  };

  return (
    <div className={"language-selector"}>
      <select onChange={changeLocale} value={locales[locale]}>
        <option value={locales.RU}>{locales.RU}</option>
        <option value={locales.EN}>{locales.EN}</option>
      </select>
    </div>
  );
});
