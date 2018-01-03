import React from 'react';

const WeatherContents = (props) => (
  <div className="main-wrapper" data-ng-controller='WeatherController'>
    <div className="weather-forecast" data-ng-init='displayCurrentLocationData()'>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="update">
                <span>Today's <strong className="warmer">Weather</strong> Forcast of Kathmandu N.P.</span>
                <ul>
                  <li>High <strong>51.58&deg; C</strong>
                  </li>
                  <li>Low <strong>0.46&deg; C</strong>
                  </li>
                  <li>Updated 23min ago</li>
                </ul>
              </div>
            </div>
            <div className="forecast">
              <div className="status col-md-6 col-sm-6 col-xs-12">
                <ul>
                  <li>
                    <i>
                      <img className="icon-image" data-ng-if="weatherIcon" alt="ico" src="http://openweathermap.org/img/w/02n.png" />
                    </i> Few Clouds
                      </li>
                  <li>
                    <i className="icon-thermometer-quarter"></i>41 &deg; C</li>
                  <li>
                    <i className="icon-wind"></i>
                    <span>wind from <strong>SouthEast</strong>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="status sun-stat col-md-6 col-sm-6 col-xs-12">
                <ul>
                  <li>
                    <i className="icon-sun2"></i>6:19:01 PM</li>
                  <li>
                    <i className="icon-cloudy2"></i>6:19:39 PM</li>
                  <li>
                    <i className="icon-crescent"></i>80&#37; Humidity</li>
                </ul>
              </div>
            </div>
            <div className="forecast-detail">
              <div className="col-md-6 col-md-offset-3 col-sm-6 col-xs-12">
                <ul>
                  <li>
                    <span>Pressure</span>
                    <strong> 1017</strong> in</li>
                  <li>
                    <span>Cloudiness</span>
                    <strong> 20</strong>&#37;</li>
                  <li>
                    <span>Humidity</span>
                    <strong> 80</strong>&#37;</li>
                  <li>
                    <span>Rainfall</span>
                    <strong> 0</strong> mm</li>
                  <li>
                    <span>Snow Depth</span>
                    <strong> 0</strong> mm</li>
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
