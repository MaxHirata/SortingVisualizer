export default function heapSort(array) {
	const animations = [];
	if (array.length === (0 | 1)) {
		return array;
	}
	console.log(array);
	//heap size
	let k = array.length - 1;

	//maxHeapify(array, k, animations);

	while (k > 0) {
		//step 1: create a maxHeap
		maxHeapify(array, k, animations);

		//Add animations steps
		animations.push([ 0, k ]);
		animations.push([ 0, k ]);
		animations.push([ 0, array[k] ]);
		animations.push([ 0, k ]);
		animations.push([ 0, k ]);
		animations.push([ k, array[0] ]);

		//step 2: switch first node and last node, the remove the last node in the heap
		let temp = array[0];
		array[0] = array[k];
		array[k] = temp;
		k -= 1;
	}

	console.log(array);
	return animations;
}

function maxHeapify(array, heapSize, animations) {
	for (let i = 0; i <= heapSize; i++) {
		var child1 = i * 2 + 1;
		var child2 = i * 2 + 2;
		if (child1 <= heapSize && array[i] < array[child1]) {
			//add animation steps
			animations.push([ i, child1 ]);
			animations.push([ i, child1 ]);
			animations.push([ i, array[child1] ]);
			animations.push([ i, child1 ]);
			animations.push([ i, child1 ]);
			animations.push([ child1, array[i] ]);

			//swap parent and child values
			var temp = array[i];
			array[i] = array[child1];
			array[child1] = temp;
		}
		if (child2 <= heapSize && array[i] < array[child2]) {
			//add animation steps
			animations.push([ i, child2 ]);
			animations.push([ i, child2 ]);
			animations.push([ i, array[child2] ]);
			animations.push([ i, child2 ]);
			animations.push([ i, child2 ]);
			animations.push([ child2, array[i] ]);

			var temp = array[i];
			array[i] = array[child2];
			array[child2] = temp;
		}
	}
}
