// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	
	var candidates = [];
	
	if (A.indexOf(0) >= 0) {
		candidates.push(0);
	}
	
	function findPMax() {
		var max = null;
		var B = [];
		A.forEach(function(item) {
			if (item > 0 && (!max || item > max)) {
				if (max) {
					B.push(max)
				}
				max = item;
			} else {
				B.push(item);
			}
		})
		A = B;
		return max;
	}
	
	var idx=0;
	while(idx < 3) {
		var max = findPMax();
		if (max) {
			candidates.push(max);
		}
		idx++;
	}
	
	function findNMin() {
		var min = null;
		var B = [];
		A.forEach(function(item) {
			if (item < 0 && (!min || item < min)) {
				if (min) {
					B.push(min)
				}
				min = item; 
			} else {
				B.push(item)
			}
		})
		A = B;
		return min
	}
	
	idx=0;
	while(idx < 3) {
		var min = findNMin();
		if (min) {
			candidates.push(min);
		}
		idx++;
	}
	
	function findNMax() {
		var max = null;
		var B = [];
		A.forEach(function(item) {
			if (item < 0 && (!max || item > max)) {
				if (max) {
					B.push(max)
				}
				max = item;
			} else {
				B.push(item);
			}
		})
		A = B;
		return max;
	}
	
	idx=0;
	while(idx < 3) {
		var min = findNMax();
		if (min && candidates.indexOf(min) < 0) {
			candidates.push(min);
		}
		idx++;
	}
	
 
	var max = NaN;
	
	var idx1 = 0;
	while(idx1 < candidates.length) {
		var idx2 = idx1 + 1;
		while (idx2 < candidates.length) {
			var idx3 = idx2 + 1;
			while (idx3 < candidates.length) {
				var var1 = candidates[idx1]
				var var2 = candidates[idx2]
				var var3 = candidates[idx3]
				var candi = var1*var2*var3;
				if (isNaN(max) || candi > max) {
					max = candi;
				}
				idx3++;
			}
			idx2++;
		}
		idx1++;
	}
	return max;
}