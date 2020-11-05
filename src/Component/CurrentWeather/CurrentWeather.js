import React from 'react';
import styles from './CurrentWeather.module.css';

const CurrentWeather = () =>(
	<div className={styles.current}>
		<div className={styles.left}>
			<div className={styles.temperature}>
				12&deg;
			</div>
			<div className={styles.humidity}>
				66%
			</div>
			<div className={styles.wind}>
				6.2k/m
			</div>
		</div>
		<div className={styles.right}>
			Sydney
		</div>
	</div>
)

export default CurrentWeather;