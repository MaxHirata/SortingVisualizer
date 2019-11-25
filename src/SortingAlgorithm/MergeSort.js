export function mergeSort(array) {
	const animation = [];
	if (array.length <= 1) return array;
	const auxiliaryArray = array.slice();
	_mergeSort(array, 0, array.length - 1, auxiliaryArray, animation);
	return animation;
}

function _mergeSort(mainArray, start, end, auxiliaryArray, animation) {
	if (start == end) return;
	const middle = Math.floor((start + end) / 2);
	_mergeSort(auxiliaryArray, start, middle, mainArray, animation);
	_mergeSort(auxiliaryArray, middle + 1, end, mainArray, animation);
	_merge(mainArray, start, middle, end, auxiliaryArray, animation);
}

function _merge(mainArray, start, middle, end, auxiliaryArray, animation) {
	let k = start;
	let i = start;
	let j = middle + 1;
	while (i <= middle && j <= end) {}
}
