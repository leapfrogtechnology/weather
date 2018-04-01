import qs from 'qs';

import config from '../config';
import http from '../utils/http';

/**
 * Get weather forecast information for given city.
 * 
 * @param {string} city 
 */
export async function getForecastByCity(city = config.defaultCity) {
  const query = qs.stringify({ q: city, appId: config.weatherAppApiId, units: 'metric', cnt: 16 });
  const data = await http.get(`${config.weatherAppUrl}/forecast?${query}`);

  return data.data;
}

/**
 * Get current weather information for given city.
 * 
 * @param {string} city 
 */
export async function getCurrentWeatherByCity(city = config.defaultCity) {
  const query = qs.stringify({ q: city, appId: config.weatherAppApiId, units: 'metric', cnt: 1 });
  const data = await http.get(`${config.weatherAppUrl}/weather?${query}`);

  return data.data;
}

/**
 * Get current weather information for given latitude and longitude
 * 
 * @param {number} lat 
 * @param {number} lon 
 */
export async function getCurrentWeatherByLatLon(lat, lon) {
  const query = qs.stringify({ lat, lon, appId: config.weatherAppApiId, units: 'metric', cnt: 1 });
  const data = await http.get(`${config.weatherAppUrl}/weather?${query}`);

  return data.data;
}

/**
 * Convert degree to direction.
 * 
 * @param {number} degree 
 */
export function convertDegreeToCompassText(degree) {
  const degreePerDirection = Math.ceil((degree / 22.5) + 0.5);

  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NE',
    'NNW'
  ];

  return directions[degreePerDirection % 16];
};


/**
 * Get the updated time from given timestamp.
 * 
 * @param {string} timestamp 
 */
export function getUpdatedTime(timestamp) {
  const currentDate = new Date();
  const updatedDate = new Date(timestamp * 1000);

  const difference = parseInt((currentDate.getTime() - updatedDate.getTime()) / (60 * 1000), 10);

  const hour = Math.floor(difference / 60);
  const min = difference % 60;

  return hour !== 0 ?
    `${hour}${hour > 1 ? ' hrs' : ' hour'} ${min}${min > 1 ? ' mins' : ' min'}`
    :
    `${min}${min > 1 ? ' minutes' : ' minute'}`;
}

/**
 * Return time string for current locale.
 * 
 * @param {string} timestamp 
 */
export function getCurrentTimeString(timestamp) {
  if (timestamp === 'now') {
    const datetime = new Date();

    return datetime.toLocaleTimeString('en-us', { hour: '2-digit', hour12: false });
  }

  const datetime = new Date(timestamp * 1000);

  return datetime.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit' });
}
