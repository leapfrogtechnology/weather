import './public'

import React from 'react';
import ReactDOM from 'react-dom';

import Weather from './components/Weather';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Weather />, document.getElementById('root'));
registerServiceWorker();
