import React from 'react';
import styles from './City.module.css';
import Temperature from '../Temperature';
// import Cloudy from '../../../img/cloudy.svg';

const City = ({
	name,
	temperature,
	icon,
	description
})=>(
	<button>
	<h3 className={styles.title}>{name}</h3>
	<div className={styles.temperature}>
		<Temperature>{temperature}</Temperature>
	</div>
	<img className={styles.pic} src={`http://openweathermap.org/img/wn/${icon}.png`}  alt={description} />
</button>
)


export default City;