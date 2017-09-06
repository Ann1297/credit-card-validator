var isCreditCardValid = function(s) {
    return containOnlyNumbersAnd16Digits(s) 
            && containDifferentDigits(s) 
            && evenFinalDigit(s) 
            && sumGreater16(s);
};

var containOnlyNumbersAnd16Digits = function(s) {
    if (s.match(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/) !== null) {
        return true;
    }
    return false;
}

var containDifferentDigits = function(s) {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < s.length; j++) {

            if (+s[j] !== i && s[j] !== '-') {
                break;
            } else if (j === s.length - 1) {
                return false;
            }
        }
    }

    return true;        
}

var evenFinalDigit  = function(s) {
    var last = s.charAt(s.length - 1);
    if (+last % 2 === 0) {
        return true;
    }
    return false;
}

var sumGreater16 = function(s) {
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            sum += +s[i];
        }
    }
    if (sum < 16) {
        return false;
    }
    return true;
}