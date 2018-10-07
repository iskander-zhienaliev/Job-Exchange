import React from "react";
import { GoBack } from "../GoBack";
import Select from "react-select";

export const AsBoss = props => {
  const {
    description,
    onChange,
    onSelectChange,
    onValidChange,
    onClick,
    onFocus,
    onSubmit,
    data,
    techs,
    hours,
    minutes,
    tags
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
          <label htmlFor="ta">Описание</label>
          <textarea
            rows="5"
            required
            id="ta"
            name="description"
            value={description}
            onChange={onChange}
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
        <div className="form__item">
          <label htmlFor="tags">Тэги</label>
          <input
            type="text"
            id="tags"
            name="tags"
            onChange={onChange}
            value={tags}
            required
          />
        </div>
        <input type="submit" label="Отправить" />
      </form>
    </div>
  );
};
