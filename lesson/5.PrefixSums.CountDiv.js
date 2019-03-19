// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
	// write your code in JavaScript (Node.js 8.9.4)
	var first = A % K == 0 ? A : A + (K - A % K);
	var last = B % K == 0 ? B : B - B % K;
	if (first > last) {
		return 0;
	}
	return Math.ceil((last - first + 1)/K)
}
