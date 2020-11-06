import React from 'react';
import Meta from '../component/Meta';
import Temperature from '../component/Temperature';
import styles from './CurrentWeather.module.css';

const CurrentWeather = () =>(
	<div className={styles.current}>
		<div className={styles.left}>
			<div className={styles.temperature}>
				<Temperature>12</Temperature>
			</div>
			<span className={styles.weather}>Cloudy</span>
			<div className={styles.meta}>
				<div className={styles.humidity}>
					<Meta title="HUMIDITY" value= "66%" />
				</div>
				<div className={styles.divider} />
				<div className={styles.wind}>
					<Meta title="WIND" value= "6.2K/M" />
				</div>
			</div>
		</div>
		<div className={styles.right}>
			<span className={styles.city}>Sydney</span>
			<div className={styles.shadow} />
		</div>
	</div>
)

export default CurrentWeather;