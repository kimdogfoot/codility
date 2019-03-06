function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	
	var info = [];
	
	A.forEach(function(item) {
		if (item > 0) {
			info[item] = true;
		}
	})
	
	var min = 1;
	var find = false;
	var idx = 0;
	
	while(!find) {
		idx++;
		if (!info[idx]) {
			min = idx;
			find = true;
		}
	}
	
	return min;
	
}