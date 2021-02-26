import React, { Fragment } from "react";

const Button = (props) => {
  return (
    <Fragment>
      <a
        className={props.isDarkMode === true ? "button-dark" : "button"}
        onClick={props.onClick}
      >
        {props.label}
      </a>
    </Fragment>
  );
};

export default Button;
