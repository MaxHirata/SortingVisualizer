function quickSort(arr, low, high) {
	if (low < high) {
		// pivot is partitioning index, arr[pivot] is now at the right place
		let pivot = partition(arr, low, high);

		// Before Pivot
		quickSort(arr, low, pivot - 1);
		// Above Pivot
		quickSort(arr, pivot + 1, high);
	}
}

function partition(arr, low, high) {
	let pivot = arr[low + (high - low) / 2];
	let i = low;
	let j = high;
	while (arr[i] < pivot) i++;
	while (arr[j] > pivot) j--;

	while (i < j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		i += 1;
		j -= 1;
	}
}
