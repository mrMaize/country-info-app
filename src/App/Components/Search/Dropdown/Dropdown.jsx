import React from "react";
import uniqueId from "../../../../utils/helpers/uniqueId";

export default ({ options, selectCountryCallback }) => {
  return (
    <>
      {options.length === 0 ? null : (
        <div>
          {options.map(option => (
            <div key={uniqueId()} onClick={selectCountryCallback(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
