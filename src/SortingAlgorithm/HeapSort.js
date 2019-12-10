export default function heapSort(array) {
	if (array.length === (0 | 1)) {
		return array;
	}
	console.log(array);
	//heap size
	let k = array.length - 1;

	while (k > 0) {
		//step 1: create a maxHeap
		maxHeapify(array, k);

		//step 2: switch first node and last node, the remove the last node in the heap
		let temp = array[0];
		array[0] = array[k];
		array[k] = temp;
		k -= 1;
	}

	console.log(array);
}

function maxHeapify(array, heapSize) {
	for (let i = 0; i < heapSize; i++) {
		var child1 = i * 2 + 1;
		var child2 = i * 2 + 2;
		if (child1 <= heapSize && array[i] < array[child1]) {
			//swap parent and child values
			var temp = array[i];
			array[i] = array[child1];
			array[child1] = temp;
		}

		if (child2 <= heapSize && array[i] < array[child2]) {
			var temp = array[i];
			array[i] = array[child2];
			array[child2] = temp;
		}
	}
}
