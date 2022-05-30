import React from "react";

export default function DisplayInfo({ city }) {
  return (
    <div>
      City: {city.name}
      <br />
      {!city.sys.country ? (
        <div> Country: Null </div>
      ) : (
        <div> Country: {city.sys.country} </div>
      )}
    </div>
  );
}
