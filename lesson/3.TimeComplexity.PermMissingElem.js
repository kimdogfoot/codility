function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	var result = [];
	A.forEach(function(item) {
		result[item] = true;
	})
	var missedIdx = 0;
	var find = false;
	while(!find) {
		missedIdx++;
		find = !result[missedIdx];
	}
	return missedIdx;
}
