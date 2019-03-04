function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var count = {}
    A.forEach(function(item) {
        count[item] = count[item] || 0;
        count[item]++;
    })
    for(var num in count) {
        if (count[num]%2 == 1) {
            return parseInt(num);
        }
    }
    console.error("WTF")
}
