import React from "react";
import { Layout } from "./Components";
import "./App.scss";

export default () => (
  <div className={'main-container'}>
    <div className={'container'}>
      <Layout.LanguageSelector />
      <Layout.Search />
      <Layout.CountryCard />
    </div>
  </div>
);
