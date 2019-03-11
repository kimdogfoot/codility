// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var letters = S.split('').map(function(letter) { switch(letter) {
        case "A": return 1
        case "C": return 2
        case "G": return 3
        case "T": return 4
    }})

    var rangeSolutions = [];
    var shortestPostions = {};
    var idx = letters.length - 1;
    while(idx > -1) {
        var letter = letters[idx];
        rangeSolutions[idx] = {};
        for (var charSolution = 1 ; charSolution < 5 ; charSolution++) {
            if (charSolution == letter) {
                shortestPostions[charSolution] = idx;
            }
            if (!isNaN(shortestPostions[charSolution])) {
                if (charSolution == letter) {
                    rangeSolutions[idx][charSolution] = idx;
                } else {
                    rangeSolutions[idx][charSolution] = shortestPostions[charSolution];
                }
            }
        }
        idx--;
    }

    var result = [];
    P.forEach(function(dummy, idx) {
        var startIdx = P[idx];
        var endIdx = Q[idx];
        var letter = letters[startIdx];
        var solution = rangeSolutions[startIdx];

        for (var checkLetter = 1 ; checkLetter < 5 ; checkLetter++) {
            if (endIdx >= solution[checkLetter]) {
                result.push(checkLetter)
                break;
            }
        }
    })
    return result;
}