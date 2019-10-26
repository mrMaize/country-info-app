import React from "react";
import { connect } from "react-redux";
import { setLocale } from "../../../utils/store/actions";
import { locale } from "../../../utils/contants/layout";
import './LanguageSelector.css';

export default connect(
  null,
  dispatch => ({
    setLocale: locale => dispatch(setLocale(locale))
  })
)(({ setLocale }) => (
  <div className={'language-selector'}>
    <select onChange={event => setLocale(event.target.value)}>
      <option value={locale.RU}>{locale.RU}</option>
      <option value={locale.EN}>{locale.EN}</option>
    </select>
  </div>
));
