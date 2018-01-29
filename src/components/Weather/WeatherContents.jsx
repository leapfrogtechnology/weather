import React from 'react';
import * as weatherService from '../../services/weather';


const WeatherContents = ({ weather, wind, clouds, main, sys, datetime, city }) => (

  <div className={`main-wrapper bg-${weather.icon} bg-${weatherService.getCurrentTimeString('now')}`}>
    <section className="top-left col-lg-6 col-md-8">
      <div className="row">
        <div className="col-3 text-right"><i className={`display-1 fa-${weather.icon}`}></i></div>
        <div className="col">
          <h1 className="display-1">{Math.round(main.temp)}<sup>&deg;c</sup></h1>
          <h2 className="display-4 text-capitalize">{weather.description}</h2>
          <p className="lead text-dim">Updated {weatherService.getUpdatedTime(datetime)} ago in
            <strong> {city}</strong></p>
        </div>
      </div>
    </section>
    <section className="bottom-right col-lg-7 col-md-10">
      <div className="row">
        <div className="col-1 text-right"><i className="fa-sunrise h2"></i></div>
        <div className="col">
          <p className="m-0 text-dim">Sunrise</p>
          <h4>{weatherService.getCurrentTimeString(sys.sunrise)}</h4>
        </div>
        <div className="col-1 text-right"><i className="fa-sunset h2"></i></div>
        <div className="col">
          <p className="m-0 text-dim">Sunset</p>
          <h4>{weatherService.getCurrentTimeString(sys.sunset)}</h4>
        </div>
        <div className="col-1 text-right">
          <div className="windarrow" style={{ transform: `rotate(${wind.deg}deg)` }}><i className="fa-wind h2"></i></div>
        </div>
        <div className="col">
          <p className="m-0 text-dim">Wind</p>
          <h4>{wind.speed}kmph</h4>
        </div>
        <div className="col-1 text-right"><i className="fa-humidity h2"></i></div>
        <div className="col">
          <p className="m-0 text-dim">Humidity</p>
          <h4>{main.humidity}%</h4>
        </div>
      </div>
    </section>
  </div>
);

export default WeatherContents;
