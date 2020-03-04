import React from "react";
import uniqueId from "../../../../utils/helpers/uniqueId";
import "../../../App.scss";

export default ({ options, selectCountryCallback }) => {
  console.log(`options set changed...`);
  console.log(`options are :`, options);

  return (
    <>
      {!Boolean(options.length) ? null : (
        <div className={"countries-list-container"}>
          {options.map(option => (
            <div
              className={"countries-list-option"}
              key={uniqueId()}
              onClick={selectCountryCallback(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
