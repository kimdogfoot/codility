// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var last = 0;
    var solutions = [];
    solutions[A.length]
    
    var idx = A.length - 2;
    while(idx > -1) {
        solutions[idx] = {};
        if (!solutions[idx + 1]) {
            solutions[idx] = { avg: (A[idx] + A[idx+1])/2, count: 2 }
        } else {
            var avg1 = (A[idx] + A[idx + 1])/2
            var avg2 = (solutions[idx + 1].avg*solutions[idx + 1].count + A[idx]) / (1 + solutions[idx + 1].count)
            if (avg1 > avg2) {
                solutions[idx] = { avg: avg2, count: solutions[idx + 1].count + 1 }
            } else {
                solutions[idx] = { avg: avg1, count: 2 }
            }
        }
        idx--
	}
    var min;
    var minStart;
    idx = 0
    while(idx < A.length - 1) {
        var solution = solutions[idx];
        if (isNaN(min) || solution.avg < min) {
            min = solution.avg
            minStart = idx;
        }
        idx++
    }
    return minStart
}
