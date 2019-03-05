function solution(N) {
	
	var maxGap = 0;
	var gap = 0;
	var started = false;
	
	var num = N
	
	while(num > 0) {
		var digit = num%2
		if (digit == 1) {
			started = true
			maxGap = Math.max(gap, maxGap)
			gap = 0
		} else if (digit == 0 && started) {
			gap++
		}
		num = Math.floor(num/2);
	}
	return maxGap
}
