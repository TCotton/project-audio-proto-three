import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

export default (props) => {

	function average(data) {
		return _.round(_.sum(data) / data.length);
	}

	return (
		<Sparklines height={120} width={180} data={props.data}>
			<SparklinesLine color={props.colours}/>
			<SparklinesReferenceLine type="avg"/>
			<div>
				{average(props.data)} {props.units}
			</div>
		</Sparklines>
	);

}