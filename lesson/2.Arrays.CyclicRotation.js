function solution(A, K) {
	// write your code in JavaScript (Node.js 8.9.4)
	if(!A || A.length == 0) {
		return A;
	}
	for(var idx=0; idx < K; idx++) {
		A.unshift(A.pop())
	}
	return A;
}
