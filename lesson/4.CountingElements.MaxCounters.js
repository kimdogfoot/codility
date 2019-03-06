// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
	var counters = [];
	for (var idx=0; idx<N ;idx++) {
		counters.push(0)
	}
	
	var max = 0;
	var min = 0;
	A.forEach(function(value, idx) {
		if (1 <= value && value <= N) {
			counters[value - 1] = Math.max(min + 1, counters[value - 1] + 1)
			max = Math.max(max, counters[value - 1])
		} else if (value == (N + 1)) {
			min = max;
		}
	})
	
	return counters.map(function(item) { return Math.max(min, item); })
	// write your code in JavaScript (Node.js 8.9.4)
}