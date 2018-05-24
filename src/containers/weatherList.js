import React, { Component } from "react";
import { connect } from "react-redux";
import City from "../models/City";
import Chart from "../components/chart";

class WeatherList extends Component {

  renderWeather(data) {
    const city = new City(data)

    return (
      <tr key={city.name}>
        <td>{city.name}</td>
        <td><Chart data={city.getTempList()} color="blue" units="K" /></td>
        <td><Chart data={city.getPressureList()} color="yellow" units="hPa" /></td>
        <td><Chart data={city.getHumidityList()} color="teal" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
