import React, { Component } from "react";
import { Route } from "react-router-dom";
import Core from "../Core";
import { AsBoss } from "../AsBoss";
import { AsEmployee } from "../AsEmployee";
import AsGuest from "../AsGuest";
import { techData } from "./techData";
import { tasksData, emplData } from "./initData";

class Main extends Component {
  constructor(props) {
    super(props);
    (this.employee = [...emplData]),
      (this.boss = [...tasksData]),
      (this.state = {
        hours: 0,
        minutes: 0,
        tags: "",
        techs: null,
        description: ""
      });
    this.onChange = this.onChange.bind(this);
    this.selectOnChange = this.selectOnChange.bind(this);
    this.onValidChange = this.onValidChange.bind(this);
    this.onBossSubmit = this.onBossSubmit.bind(this);
    this.onEmployeeSubmit = this.onEmployeeSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onValidChange(e) {
    if (e.target.name === "hours") {
      let hours = e.target.validity.valid ? e.target.value : this.state.hours;
      hours = hours.length < 3 ? e.target.value : this.state.hours;

      this.setState({ hours });
    } else {
      let minutes = e.target.validity.valid
        ? e.target.value
        : this.state.minutes;
      minutes = parseInt(minutes) > 59 ? "59" : e.target.value;

      this.setState({ minutes });
    }
  }

  selectOnChange(techs) {
    this.setState({
      techs
    });
  }

  resetState() {
    this.setState({
      minutes: "",
      hours: "",
      tags: "",
      description: "",
      techs: ""
    });
  }

  parseTechs() {
    const techs = [];
    this.state.techs.map(val => {
      techs.push(val.value);
    });
    return techs;
  }

  onBossSubmit(e) {
    const minutesFormatted = parseFloat(
      (parseFloat(this.state.minutes) / 60).toFixed(2)
    );
    const estimation = parseFloat(this.state.hours) + minutesFormatted;

    const techs = this.parseTechs();

    this.boss.push({
      id: this.boss.length,
      techs: techs,
      description: this.state.description,
      estimation: estimation,
      tags: this.state.tags
    });
    this.resetState();
    e.preventDefault();
  }

  onEmployeeSubmit(e) {
    const minutesFormatted = parseFloat(
      (parseFloat(this.state.minutes) / 60).toFixed(2)
    );
    const estimation = parseFloat(this.state.hours) + minutesFormatted;

    const techs = this.parseTechs();

    this.employee.push({
      id: this.employee.length,
      techs: techs,
      estimation: estimation
    });
    this.resetState();
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Core} />
        <Route
          path="/boss"
          render={props => (
            <AsBoss
              {...props}
              description={this.state.description}
              techs={this.state.techs}
              onChange={this.onChange}
              onSelectChange={this.selectOnChange}
              onValidChange={this.onValidChange}
              data={techData}
              hours={this.state.hours}
              minutes={this.state.minutes}
              tags={this.state.tags}
              onSubmit={this.onBossSubmit}
              onClick={() => {
                this.resetState();
              }}
              onFocus={e => {
                this.setState({ [e.target.name]: "" });
              }}
            />
          )}
        />
        <Route
          path="/employee"
          render={props => (
            <AsEmployee
              {...props}
              techs={this.state.techs}
              onChange={this.onChange}
              onSelectChange={this.selectOnChange}
              onValidChange={this.onValidChange}
              data={techData}
              hours={this.state.hours}
              minutes={this.state.minutes}
              onSubmit={this.onEmployeeSubmit}
              onClick={() => {
                this.resetState();
              }}
              onFocus={e => {
                this.setState({ [e.target.name]: "" });
              }}
            />
          )}
        />
        <Route
          path="/guest"
          render={props => (
            <AsGuest
              {...props}
              employees={this.employee}
              tasks={this.boss}
              data={techData}
              onClick={() => {
                this.resetState();
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default Main;
