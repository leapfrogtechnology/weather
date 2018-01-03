import axios from 'axios';

import config from '../config';

const http = axios.create({
  baseURL: config.weatherAppApiId,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
