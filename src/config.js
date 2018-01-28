const config = {
  env: process.env.NODE_ENV,
  defaultCity: 'Kathmandu',
  weatherAppUrl: `${process.env.REACT_APP_WEATHER_APP_API_URL}`,
  weatherAppApiId: `${process.env.REACT_APP_WEATHER_APP_API_ID}`
}

export default config;