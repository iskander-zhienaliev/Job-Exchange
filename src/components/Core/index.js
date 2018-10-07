import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Item } from "../Item";
import { data } from "./data";

class Core extends Component {
  render() {
    const { id, route, img, text } = data;
    return (
      <div className="index container">
        <div className="index__title">Войти как:</div>
        <div className="index__wrap">
          {id.map(i => {
            return (
              <Link to={route[i]} key={i}>
                <Item img={img[i]} text={text[i]} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Core;
