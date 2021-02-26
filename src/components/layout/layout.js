//* Dependencies
import React from "react";
import "../../App.css";

//* Custom components
import Appbar from "./Appbar";

const layout = ({ children, isDarkMode }) => {
  return (
    <div className={isDarkMode === true ? "background-dark" : "background"}>
      <Appbar isDarkMode={isDarkMode}/>

      {children}
    </div>
  );
};

export default layout;
