import React, { Component } from "react";
import { GoBack } from "../GoBack";
import { Tasks } from "../Tasks";
import { Employees } from "../Employees";
import Select from "react-select";

class AsGuest extends Component {
  constructor(props) {
    super(props);
    this.tasks = [...this.props.tasks];
    this.state = {
      employees: [...this.props.employees],
      techs: "",
      word: "",
      direction: "asc"
    };

    this.onWordChange = this.onWordChange.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  onWordChange(e) {
    this.setState({
      word: e.target.value
    });
  }

  sortBy(key) {
    this.setState({
      employees: this.state.employees.sort((a, b) => {
        return this.state.direction === "asc"
          ? a[key] - b[key]
          : b[key] - a[key];
      }),
      direction: this.state.direction === "asc" ? "desc" : "asc"
    });
  }

  render() {
    const { onClick, data } = this.props;
    const filteredWord = this.tasks.filter(task => {
      return (
        task.description
          .toLowerCase()
          .includes(this.state.word.toLowerCase()) &&
        (task.techs.includes(this.state.techs.value) || this.state.techs === "")
      );
    });
    return (
      <div className="container">
        <GoBack onClick={onClick} />
        <div className="guest">
          <section className="guest-item">
            <div className="guest__title">Задачи</div>
            <div className="guest-tasks">
              <div className="guest-tasks__filters">
                <div className="guest-tasks__filter">
                  <label htmlFor="select">Фильтр по технологиям</label>
                  <Select
                    options={data}
                    name="techs"
                    id="select"
                    isSearchable
                    onChange={techs => this.setState({ techs })}
                    value={this.state.techs}
                  />
                </div>
                <div className="guest-tasks__filter">
                  <label htmlFor="onWord">Фильтр по словам</label>
                  <input
                    type="text"
                    name="filterWord"
                    id="onWord"
                    onChange={this.onWordChange}
                    value={this.state.word}
                  />
                </div>
              </div>
              <table className="guest-tasks__table">
                <thead>
                  <tr>
                    <td>Технологии</td>
                    <td>Описание</td>
                    <td>Время</td>
                    <td>Тэги</td>
                  </tr>
                </thead>
                <tbody>
                  <Tasks tasks={filteredWord} />
                </tbody>
              </table>
            </div>
          </section>
          <section className="guest-item">
            <div className="guest__title">Сотрудники</div>
            <div className="guest-employees">
              <table className="guest-employees__table">
                <thead>
                  <tr>
                    <td>Технологии</td>
                    <td>
                      <button
                        className={
                          this.state.direction === "asc" ? "asc" : "desc"
                        }
                        onClick={() => this.sortBy("estimation")}
                      >
                        Время
                      </button>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <Employees employees={this.state.employees} />
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AsGuest;
