import React from 'react';
import styles from './City.module.css';
import Temperature from '../Temperature';

const City = ({
	name,
	temperature,
	icon,
	description
})=>(
	<button data-testid="CITY">
		<h3 data-testid="NAME" className={styles.title}>{name}</h3>
		<div className={styles.temperature}>
			<Temperature>{temperature}</Temperature>
		</div>
		<img data-testid="WEATHER_ICON" className={styles.pic} src={`http://openweathermap.org/img/wn/${icon}.png`}  alt={description} />
	</button>
)


export default City;