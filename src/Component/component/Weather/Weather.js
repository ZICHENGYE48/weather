import React from 'react';
import Temperature from '../Temperature';
import pic from '../../../img/cloudy.svg';
import styles from './Weather.module.css';

const Weather = ({
	day,
	temperature
}) =>(
	<div className={styles.wrapper}>
		<h3>{day}</h3>
		<img src={pic} alt="picture" />
		<div className={styles.temperature}>
			<Temperature>{temperature}</Temperature>
		</div>
	</div>
)

export default Weather;