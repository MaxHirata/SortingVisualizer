export default function(animations, array, i, j) {
	animations.push([ i, j ]);
	animations.push([ i, j ]);
	animations.push([ i, array[j] ]);
	animations.push([ i, j ]);
	animations.push([ i, j ]);
	animations.push([ j, array[i] ]);
}
