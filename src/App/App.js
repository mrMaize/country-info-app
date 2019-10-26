import React from "react";
import {Layout} from './Components';
import './App.css';

function App() {
  return (
    <div className={'container'}>
      <Layout.LanguageSelector/>
      <Layout.Search />
      <Layout.CountryCard />
    </div>
  );
}

export default App;
