var romanToInt = function(s) {
    let res = 0;
    let val = 0;
    let preVal = 0;

    for (let i = s.length - 1; i >= 0; i--) {
    
        switch (s[i]) {
            case 'I':
                val = 1;
                break;
            case 'V':
                val = 5;
                break;
            case 'X':
                val = 10;
                break;
            case 'L':
                val = 50;
                break;
            case 'C':
                val = 100;
                break;
            case 'D':
                val = 500;
                break;
            case 'M':
                val = 1000;
                break;
        }
        if (val < preVal) {
            res -= val;
        } else {
            res += val;
        }
        preVal = val;
    }
    return res;   }
console.log(romanToInt('XX'))