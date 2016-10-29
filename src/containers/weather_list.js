import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

	renderWeather(cityData) {

		if(!cityData) {
			return;
		}

		const name = cityData.city.name;
		const temp = cityData.list.map(weather => (Number.parseFloat(weather.main.temp) - 273.15));
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Chart data={temp} colour="blue" units="K" />
				</td>
				<td>
					<Chart data={pressure} colour="green" units="hPa" />
				</td>
				<td>
					<Chart data={humidity} colour="red" units="%" />
				</td>
			</tr>
		);
	}

	render() {

		return (

			<table className="table table-hover">
				<thead>
				<tr>
					<th>City</th>
					<th>Temperature (c)</th>
					<th>Pressure (hPa)</th>
					<th>Humidity (%)</th>
				</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

		);

	}

}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);