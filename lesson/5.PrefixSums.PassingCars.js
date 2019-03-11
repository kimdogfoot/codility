// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	var possibleEastCar = [];
	var rIdx = A.length;
	while(rIdx > 0) {
		rIdx--;
		if (rIdx == A.length - 1) {
			possibleEastCar[rIdx] = A[rIdx]
		} else {
			possibleEastCar[rIdx] = A[rIdx] + possibleEastCar[rIdx + 1]
		}
	}
	var count = 0;
	var idx = 0;
	while(idx < A.length && idx + 1 < possibleEastCar.length) {
		if (A[idx] == 0) {
			count += possibleEastCar[idx]
		}
		idx++
	}
	return count > 1000000000 ? -1 : count
}