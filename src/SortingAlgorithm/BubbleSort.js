import AddSwapAnimation from '../components/Util/AddSwapAnimation';

// function bubbleSort(arr) {
// 	let swapped = true;
// 	while (swapped) {
// 		swapped = false;
// 		for (let i = 1; i < arr.length; i++) {
// 			if (arr[i - 1] > arr[i]) {
// 				swapped = true;
// 				//swap values
// 				let temp = arr[i - 1];
// 				arr[i - 1] = arr[i];
// 				arr[i] = temp;
// 			}
// 		}
// 	}
// }

export default function bubbleSort(array) {
	const animation = [];
	if (array.length <= 1) return array;
	let auxArray = array.splice();
	_bubbleSort(array, animation);
	//console.log(animation);
	return animation;
}

function _bubbleSort(array, animations) {
	let swapped = true;
	while (swapped) {
		swapped = false;
		for (let i = 1; i < array.length; i++) {
			if (array[i] < array[i - 1]) {
				swapped = true;

				animations.push([
					i,
					i - 1
				]);
				animations.push([
					i,
					i - 1
				]);
				animations.push([
					i - 1,
					array[i]
				]);
				animations.push([
					i,
					i - 1
				]);
				animations.push([
					i,
					i - 1
				]);
				animations.push([
					i,
					array[i - 1]
				]);

				//swap values
				let temp = array[i];
				array[i] = array[i - 1];
				array[i - 1] = temp;
			}
		}
	}
}
