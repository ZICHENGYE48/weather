import React from 'react';
import Meta from '../component/Meta';
import Temperature from '../component/Temperature';
import styles from './CurrentWeather.module.css';
import getWeather from '../../api/getWeather/getWeather';

const DEFAULT_CITY = "Sydney";

class CurrentWeather extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			data: null,
			loading: true
		}
	}

	async componentDidMount(){
		this.getWeather();
	}

	async getWeather (){

	const {data} =	await getWeather(DEFAULT_CITY);

		this.setState({
			data,
			loading: false
		})
	}

	render(){

		const {data ,loading} =this.state;

		console.log(data);

		return(
			<div className={styles.current}>
				{loading ? (<div className={styles.loading}>Loading...</div>) :(
					<>
							<div className={styles.left}>
							<div className={styles.temperature}>
								<Temperature>{parseInt(data.main.temp)}</Temperature>
							</div>
							<span className={styles.weather}>{data.weather.main}</span>
							<div className={styles.meta}>
								<div className={styles.humidity}>
									<Meta title="HUMIDITY" value= {`${data.main.humidity}%`} />
								</div>
								<div className={styles.divider} />
								<div className={styles.wind}>
									<Meta title="WIND" value= {`${parseInt(data.main.temp)}K/M`} />
								</div>
							</div>
						</div>
						<div className={styles.right}>
							<span className={styles.city}>{data.name}</span>
							<div className={styles.shadow} />
						</div>
						</>
				)}

	</div>
		)
	}
}


export default CurrentWeather;