import React from 'react';

import * as weatherService from '../../services/weather';

const WeatherContents = ({ weather, wind, clouds, main, sys, datetime }) => (
  <div className="main-wrapper" data-ng-controller='WeatherController'>
    <div className="weather-forecast" data-ng-init='displayCurrentLocationData()'>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="update">
                <span>Today's <strong className="warmer">Weather</strong> Forcast of Kathmandu</span>
                <ul>
                  {/* <li>High <strong>51.58&deg; C</strong>
                  </li>
                  <li>Low <strong>0.46&deg; C</strong>
                  </li> */}
                  <li>Updated {weatherService.getUpdatedTime(datetime)} ago</li>
                </ul>
              </div>
            </div>
            <div className="forecast">
              <div className="status col-md-6 col-sm-6 col-xs-12">
                <ul>
                  <li>
                    <i>
                      <img className="icon-image" alt="ico" src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
                    </i> {weather.description}
                  </li>
                  <li>
                    <i className="icon-thermometer-quarter"></i>{Math.round(main.temp)}&deg;C</li>
                  <li>
                    <i className="icon-wind"></i>
                    <span>wind from <strong>{weatherService.convertDegreeToCompassText(wind.deg) || 'North'}</strong>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="status sun-stat col-md-6 col-sm-6 col-xs-12">
                <ul>
                  <li>
                    <i className="icon-sun2"></i>{weatherService.getCurrentTimeString(sys.sunrise)}</li>
                  <li>
                    <i className="icon-cloudy2"></i>{weatherService.getCurrentTimeString(sys.sunset)}</li>
                  <li>
                    <i className="icon-crescent"></i>{main.humidity}&#37; Humidity</li>
                </ul>
              </div>
            </div>
            <div className="forecast-detail">
              <div className="col-md-12 col-sm-8 col-xs-12">
                <ul>
                  <li>
                    <span>Pressure</span>
                    <strong> {main.pressure}</strong> in
                  </li>
                  <li>
                    <span>Cloudiness</span>
                    <strong> {clouds.all}</strong>&#37;
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WeatherContents;
