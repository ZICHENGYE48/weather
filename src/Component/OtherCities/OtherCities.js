import React from 'react';
import City from '../component/City';
import styles from './OtherCities.module.css';
import getWeathers from '../../api/getWeathers/getWeathers';

const CITIES = [{
	name: 'Melbourne',
	id: 7839805
},{
	name: 'Perth',
	id: 2153391
},{
	name: 'Darwin',
	id: 2073124
}]

class OtherCities extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: null,
			loading: true
		}
	}

	componentDidMount(){
		this.getWeather();
	}

	async getWeather(){

		const ids = CITIES.map((c)=>(c.id));

		const { data } = await getWeathers(ids);

		this.setState({
			data,
			loading: false
		})
	}

	render(){

		const {data, loading} = this.state;

		console.log(data);

		return(
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Other Cities</h2>
				{loading ? (
				<div className={styles.loading}>Loading...</div>
				):(
					<React.Fragment>
					{data.list.map((item)=>(
						<City key={item.id}
									name ={item.name}
									temperature= {parseInt(item.main.temp)}
									icon={item.weather[0].icon}
									description={item.weather[0].description}/>
					))}
					</React.Fragment>
				)
				}
			</div>
		)
	}
}


//  const OtherCities = () =>(
//  	<div className={styles.wrapper}>
//  		<h2 className={styles.title}>Other Cities</h2>
//  		<City city="Melbourne" temperature="12"></City>
//  		<City city="Melbourne" temperature="12"></City>
//  		<City city="Melbourne" temperature="12"></City>
//  	</div>
//  )

export default OtherCities;