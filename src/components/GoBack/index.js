import React from "react";
import { Link } from "react-router-dom";

export const GoBack = props => {
  return (
    <Link to="/">
      <div className="go-back" onClick={props.onClick}>
        Вернуться назад
      </div>
    </Link>
  );
};
