import React, { Component } from 'react';

import WeatherContents from './WeatherContents';
import * as geolocation from '../../utils/geolocation';
import * as weatherService from '../../services/weather';

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      weatherDetails: {},
      loading: true
    };
  }

  async componentDidMount() {
    const location = await geolocation.getCurrentLocation();
    const weatherDetails = location ? await weatherService.getCurrentWeatherByLatLon(location.latitude, location.longitude)
      : await weatherService.getCurrentWeatherByCity();

    this.setState({ weatherDetails, loading: false });
  }

  render() {
    return !this.state.loading &&
      <WeatherContents
        city={this.state.weatherDetails.name}
        sys={this.state.weatherDetails.sys}
        main={this.state.weatherDetails.main}
        wind={this.state.weatherDetails.wind}
        datetime={this.state.weatherDetails.dt}
        clouds={this.state.weatherDetails.clouds}
        weather={this.state.weatherDetails.weather[0]}
      />
  }
}

export default Weather;
