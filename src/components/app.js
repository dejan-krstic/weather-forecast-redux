import React, { Component } from "react";

import WeatherList from "../containers/weatherList";


import SearchBar from "../containers/searchBar";


export default class App extends Component {
  render () {
    return (
        <div className="container">
            <SearchBar />
            <WeatherList />
        </div>
    );
  }
}
