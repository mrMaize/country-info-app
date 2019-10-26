import React from "react";
import uniqueId from "../../../../utils/helpers/uniqueId";
import "../../../App.scss";

export default ({ options, selectCountryCallback }) => {
  return (
    <>
      {options.length === 0 ? null : (
        <div className={"countries-list-container"}>
          {options.map(option => (
            <div
              className={"countries-list-option"}
              key={uniqueId()}
              onClick={selectCountryCallback(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
