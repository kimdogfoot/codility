function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	var flags = [];
	A.forEach(function(item) {
		flags[item] = true;
	})
	if (A.length + 1 != flags.length) {
		return 0
	}
	for(var idx=1; idx < flags.length; idx++){
		if(!flags[idx]) {
			return 0
		}
	}
	return 1;
}
