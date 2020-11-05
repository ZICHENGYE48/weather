import React from 'react';
import CurrentWeather from './Component/CurrentWeather';
import OtherCities from './Component/OtherCities';
import Forecast from './Component/Forecast';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.weather}>
        <div className={styles.top}>
          <CurrentWeather />
        </div>
        <div className={styles.bottom}>
          <OtherCities />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
