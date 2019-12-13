import React, { Component } from 'react';
import './SortingVisualizer.css';
import { MContext } from '../Util/Provider';

//const ANIMATION_SPEED = 1;
//const NUM_ARR_BARS = 200;
const PRIMARY_COLOR = '#00ffcc';
//const SECONDARY_COLOR = 'red';

class SortingVisualizer extends Component {
	static contextType = MContext;

	componentDidMount() {
		this.context.generateArray();
	}

	render() {
		return (
			<MContext.Consumer>
				{(context) => (
					<div className="array-container">
						{context.array.map((value, index) => (
							<div
								className="array-bar"
								key={index}
								style={{
									background: PRIMARY_COLOR,
									height: `${value}px`
								}}
							/>
						))}
					</div>
				)}
			</MContext.Consumer>
		);
	}
}

export default SortingVisualizer;
