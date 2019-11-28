export default function mergeSort(array) {
	const animation = [];
	if (array.length <= 1) return array;
	const auxiliaryArray = array.slice();
	_mergeSort(array, 0, array.length - 1, auxiliaryArray, animation);
	return animation;
}

function _mergeSort(mainArray, start, end, auxiliaryArray, animation) {
	if (start === end) return;
	const middle = Math.floor((start + end) / 2);
	_mergeSort(auxiliaryArray, start, middle, mainArray, animation);
	_mergeSort(auxiliaryArray, middle + 1, end, mainArray, animation);
	_merge(mainArray, start, middle, end, auxiliaryArray, animation);
}

function _merge(mainArray, start, middle, end, auxiliaryArray, animation) {
	let k = start;
	let i = start;
	let j = middle + 1;
	while (i <= middle && j <= end) {
		animation.push([ i, j ]);

		animation.push([ i, j ]);

		if (auxiliaryArray[i] <= auxiliaryArray[j]) {
			animation.push([ k, auxiliaryArray[i] ]);
			mainArray[k++] = auxiliaryArray[i++];
		} else {
			animation.push([ k, auxiliaryArray[j] ]);
			mainArray[k++] = auxiliaryArray[j++];
		}
	}

	while (i <= middle) {
		animation.push([ i, i ]);
		animation.push([ i, i ]);
		animation.push([ k, auxiliaryArray[i] ]);
		mainArray[k++] = auxiliaryArray[i++];
	}

	while (j <= end) {
		animation.push([ j, j ]);
		animation.push([ j, j ]);
		animation.push([ k, auxiliaryArray[j] ]);
		mainArray[k++] = auxiliaryArray[j++];
	}
}

// export default function getMergeSortAnimations(array) {
// 	const animations = [];
// 	if (array.length <= 1) return array;
// 	const auxiliaryArray = array.slice();
// 	mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
// 	return animations;
// }

// function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
// 	if (startIdx === endIdx) return;
// 	const middleIdx = Math.floor((startIdx + endIdx) / 2);
// 	mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
// 	mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
// 	doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
// }

// function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
// 	let k = startIdx;
// 	let i = startIdx;
// 	let j = middleIdx + 1;
// 	while (i <= middleIdx && j <= endIdx) {
// 		// These are the values that we're comparing; we push them once
// 		// to change their color.
// 		animations.push([ i, j ]);
// 		// These are the values that we're comparing; we push them a second
// 		// time to revert their color.
// 		animations.push([ i, j ]);
// 		if (auxiliaryArray[i] <= auxiliaryArray[j]) {
// 			// We overwrite the value at index k in the original array with the
// 			// value at index i in the auxiliary array.
// 			animations.push([ k, auxiliaryArray[i] ]);
// 			mainArray[k++] = auxiliaryArray[i++];
// 		} else {
// 			// We overwrite the value at index k in the original array with the
// 			// value at index j in the auxiliary array.
// 			animations.push([ k, auxiliaryArray[j] ]);
// 			mainArray[k++] = auxiliaryArray[j++];
// 		}
// 	}
// 	while (i <= middleIdx) {
// 		// These are the values that we're comparing; we push them once
// 		// to change their color.
// 		animations.push([ i, i ]);
// 		// These are the values that we're comparing; we push them a second
// 		// time to revert their color.
// 		animations.push([ i, i ]);
// 		// We overwrite the value at index k in the original array with the
// 		// value at index i in the auxiliary array.
// 		animations.push([ k, auxiliaryArray[i] ]);
// 		mainArray[k++] = auxiliaryArray[i++];
// 	}
// 	while (j <= endIdx) {
// 		// These are the values that we're comparing; we push them once
// 		// to change their color.
// 		animations.push([ j, j ]);
// 		// These are the values that we're comparing; we push them a second
// 		// time to revert their color.
// 		animations.push([ j, j ]);
// 		// We overwrite the value at index k in the original array with the
// 		// value at index j in the auxiliary array.
// 		animations.push([ k, auxiliaryArray[j] ]);
// 		mainArray[k++] = auxiliaryArray[j++];
// 	}
// }
