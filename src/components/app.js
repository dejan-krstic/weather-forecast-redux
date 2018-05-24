import React, { Component } from "react";

import WeatherList from "../containers/weatherList";
import placeholder from "../../resources/assets/img/placeholder.png";


import SearchBar from "../containers/searchBar";


export default class App extends Component {
  render () {
    return (
        <div className="container">
            <SearchBar />
            <WeatherList />
            <div> <img src={placeholder}/> </div>
        </div>
    );
  }
}
