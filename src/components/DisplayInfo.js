import React from "react";

export default function DisplayInfo({ city }) {
  return (
    <div className="text-center fw-bold fs-1">
      City: {city.name}
      <br />
      Country: {city.sys.country}
    </div>
  );
}
