function solution(N) {
    var binary = getBinaryStr(N);

    var maxGap = 0;
    var gap = 0;
    var started = false;
    for (var idx=0 ; idx < binary.length ; idx++) {
        var chr = binary[idx];
        if (chr == "1") {
            started = true;
            if (started) {
                maxGap = Math.max(gap, maxGap)
                gap = 0;
            }
        } else if (chr == "0") {
            if (started) {
                gap++;
            }
        } else {
            console.error("WTF?");
        }
    }
    return maxGap;
}

function getBinaryStr(num) {
    var str = "";
    var isEnd = false;
    while(!isEnd) {
        if (num < 2) {
            isEnd = true;
            str = num + str;
        } else {
            str = (num%2) + str;
            num = Math.floor(num/2);
        }
    }
    return str;
}
