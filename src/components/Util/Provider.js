import React, { Component } from 'react';
import mergeSort from '../../SortingAlgorithm/MergeSort';
import bubbleSort from '../../SortingAlgorithm/BubbleSort';
import heapSort from '../../SortingAlgorithm/HeapSort';

export const MContext = React.createContext();

const PRIMARY_COLOR = 'teal';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 5;

export class Provider extends Component {
	state = {
		selectedOption: null,
		array: []
	};

	generateArray() {
		const array = [];
		for (let i = 0; i < 6; i++) {
			array.push(randomIntFromIntervals(7, 730));
		}
		this.setState({ array: array, selectedOption: null });
	}

	handleBubbleSort() {
		const animations = bubbleSort(this.state.array);
		//console.log('inside provider bubblesort!: ' + animations.length);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName('array-bar');
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [ barOneIdx, barTwoIdx ] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, ANIMATION_SPEED_MS);
			} else {
				setTimeout(() => {
					const [ barOneIdx, newHeight ] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.height = `${newHeight}px`;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	}

	handleMergeSort() {
		const animations = mergeSort(this.state.array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName('array-bar');
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [ barOneIdx, barTwoIdx ] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * ANIMATION_SPEED_MS);
			} else {
				setTimeout(() => {
					const [ barOneIdx, newHeight ] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.height = `${newHeight}px`;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	}

	// mergeSort() {
	// 	mergeSort(this.state.array);
	// }
	quickSort() {
		console.log('selected quickSort');
	}
	heapSort() {
		heapSort(this.state.array);
	}
	bubbleSort() {
		console.log('selected bubbleSort');
	}

	handleSelectedSort() {
		switch (this.state.selectedOption) {
			case 'mergeSort':
				this.handleMergeSort();
				break;
			case 'quickSort':
				this.quickSort();
				break;
			case 'heapSort':
				this.heapSort();
				break;
			case 'bubbleSort':
				this.handleBubbleSort();
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
