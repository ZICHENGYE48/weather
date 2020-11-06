import React from 'react';
import styles from './City.module.css';
import Temperature from '../Temperature';
import Cloudy from '../../../img/cloudy.svg';

const City = ({
	city,
	temperature
}) =>(
  <button>
		<h3>{city}</h3>
		<div className={styles.temperature}>
			<Temperature>{temperature}</Temperature>
		</div>
		<img className={styles.pic} src={Cloudy} alt="weather" />
	</button>
)

export default City;