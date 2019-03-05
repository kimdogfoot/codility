function solution(X, A) {
	// write your code in JavaScript (Node.js 8.9.4)
	var falled = {}
	var falledNum = 0;
	
	for (var idx=0 ; idx<A.length ; idx++) {
		var leafPosition = A[idx]
		if (!falled[leafPosition]) {
			falledNum++;
		}
		falled[leafPosition] = true;
		if (falledNum == X) {
			return idx
		}
	}
	return -1;
}