import React from "react";

const TextBox = ({children, boxStyle}) => {
  return (
    <div className={boxStyle}>
      {children}
    </div>
  );
};

export default TextBox;
