function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	var val = [];
	val[0] = {
		sum1: A[0],
		sum2: A.slice(1).reduce(function(acc, item) { return acc + item }, 0)
	}
	var min = Math.abs(val[0].sum1 - val[0].sum2)
	for (var idx = 1 ; idx < A.length - 1 ; idx ++) {
		var item = A[idx];
		val[idx] = {
			sum1: val[idx-1].sum1 + item,
			sum2: val[idx-1].sum2 - item
		}
		min = Math.min(min, Math.abs(val[idx].sum1 - val[idx].sum2))
	}
	return min
}

