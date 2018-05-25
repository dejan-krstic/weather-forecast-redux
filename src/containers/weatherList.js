import React, { Component } from "react";
import { connect } from "react-redux";
import City from "../models/City";
import Chart from "../components/chart";
import { GOOGLE_MAPS_API_KEY, STATIC_MAP } from '../constants/googleMap'




class WeatherList extends Component {

  renderWeather(data) {
    const city = new City(data)
    const celsius = String.fromCharCode(186) + "C"

    return (
      <tr key={city.name}>
        <td className="city-name">
          <img src={`${STATIC_MAP}center=${city.latitude},${city.longitude}&zoom=${city.getZoom()}&size=250x160&markers=color:red%7C${city.latitude},${city.longitude}&key=${GOOGLE_MAPS_API_KEY}`} alt="map" />
          <br />
          <strong>{city.name} </strong>
          <br />
          Population: {city.population}
        </td>
        <td><Chart data={city.getTempList()} color="pink" units={celsius} /></td>
        <td><Chart data={city.getPressureList()} color="teal" units="kPa" /></td>
        <td><Chart data={city.getHumidityList()} color="orange" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature ({String.fromCharCode(186) + "C"})</th>
            <th>Pressure (kPa)</th>
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
