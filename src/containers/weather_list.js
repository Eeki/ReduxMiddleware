import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) { //List must have a key in a top level element
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => _.round(weather.main.temp - 273.15));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat} = cityData.city.coord; //ES6! Pulls lon and lat from coord.


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="C"/></td>
        <td><Chart data={pressures} color="red" units="hPa"/></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({ weather }) {  //ES6 { weather } == state.weather.. equals to cons weather = state.weather
  return { weather }; // ES6 Because weather is the only parameter and has same name: { weather } === {weather : weather}
}

export default connect(mapStateToProps)(WeatherList);