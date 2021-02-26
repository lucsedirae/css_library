import React from "react";
import "../../App.css";

const Appbar = (props) => {
  return (
    <div className={props.isDarkMode === true ? "appbar-dark" : "appbar"}>
      <h1 className={props.isDarkMode === true ? "header-dark" : "header"}>
        LucSedirae's custom CSS library
      </h1>
    </div>
  );
};

export default Appbar;
