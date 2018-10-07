import React from "react";

export const Item = props => {
  const { img, text } = props;
  return (
    <div className="item">
      <div className="item__img" style={{ backgroundImage: `url(${img})` }} />
      <div className="item__text">{text}</div>
    </div>
  );
};
