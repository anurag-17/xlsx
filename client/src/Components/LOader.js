import React from "react";
import "./Loader.css";
export const LOader = () => {
  return (
    <div>
      <div className="loading" style={{ zIndex: -999999999 }}>
        <div></div>
      </div>
    </div>
  );
};
