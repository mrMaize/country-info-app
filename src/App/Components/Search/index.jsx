import React, { useState } from "react";
import { connect } from "react-redux";
import {getCountriesByName} from "../../../utils/api/requests";

function Search() {
  const onchange = event => {
    console.log(event.target.value);
  };



  return (
    <>
      <input type={"text"} onChange={onchange} />
      <button onClick={() => {
        getCountriesByName();
      }}>SEARCH</button>
    </>
  );
}

export default connect(
  state => ({}),
  dispatch => ({

  })
)(Search);
