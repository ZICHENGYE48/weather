import React from 'react';
import City from '../component/City';
import styles from './OtherCities.module.css';

const OtherCities = () =>(
	<div className={styles.wrapper}>
		<h2 className={styles.title}>Other Cities</h2>
		<City city="Melbourne" temperature="12"></City>
		<City city="Melbourne" temperature="12"></City>
		<City city="Melbourne" temperature="12"></City>
	</div>
)

export default OtherCities;