import React from 'react';
import { Sentry } from 'react-native-sentry';

// Configure crash reporting before importing anything else.
Sentry.enableInExpoDevelopment = false;
Sentry.config(
  'https://7e803c1f5a3a46e9b7704bad6e0a3d48@sentry.io/1483299',
).install();

const App = require('./component').default;

export default App;
