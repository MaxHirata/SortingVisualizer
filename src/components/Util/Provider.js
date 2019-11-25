import React, { Component } from 'react';

export const MContext = React.createContext();

export class Provider extends Component {
	state = {
		selectedOption: null,
		array: []
	};

	generateArray() {
		const array = [];
		for (let i = 0; i < 200; i++) {
			array.push(randomIntFromIntervals(7, 730));
		}
		this.setState({ array: array });
	}

	mergeSort() {
		console.log('selected MergeSort');
	}
	quickSort() {
		console.log('selected quickSort');
	}
	heapSort() {
		console.log('selected heapSort');
	}
	bubbleSort() {
		console.log('selected bubbleSort');
	}

	handleSelectedSort() {
		switch (this.state.selectedOption) {
			case 'mergeSort':
				this.mergeSort();
				break;
			case 'quickSort':
				this.quickSort();
				break;
			case 'heapSort':
				this.heapSort();
				break;
			case 'bubbleSort':
				this.bubbleSort();
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<MContext.Provider
				value={{
					selected: this.state.selectedOption,
					array: this.state.array,
					setOption: (option) => this.setState({ selectedOption: option }),
					generateArray: () => this.generateArray(),
					sort: () => this.handleSelectedSort()
				}}
			>
				{/* This indicates that the global store is accessible to all the children components with Provider as Parent Component */}
				{this.props.children}
			</MContext.Provider>
		);
	}
}

function randomIntFromIntervals(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
