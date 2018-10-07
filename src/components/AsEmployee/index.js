import React from "react";
import { GoBack } from "../GoBack";
import Select from "react-select";

export const AsEmployee = props => {
  const {
    onSelectChange,
    onValidChange,
    onFocus,
    onClick,
    onSubmit,
    data,
    techs,
    hours,
    minutes
  } = props;
  return (
    <div className="container">
      <GoBack onClick={onClick} />
      <form className="form" onSubmit={onSubmit}>
        <div className="form__item">
          <label htmlFor="select">Технологии</label>
          <Select
            name="techs"
            id="select"
            onChange={onSelectChange}
            options={data}
            value={techs}
            isMulti
            required
          />
        </div>
        <div className="form__item">
          <label htmlFor="time">Время на задачу</label>
          <input
            type="text"
            id="time"
            name="hours"
            className="form__time"
            pattern="[0-9]*"
            onChange={onValidChange}
            onFocus={onFocus}
            value={hours}
          />
          ч&nbsp;
          <input
            type="text"
            id="time"
            name="minutes"
            className="form__time"
            pattern="[0-9]*"
            onChange={onValidChange}
            onFocus={onFocus}
            value={minutes}
          />
          м
        </div>
        <input type="submit" label="Отправить" />
      </form>
    </div>
  );
};
