var isCreditCardValid = function(s) {
    var errorMessage = "";

    if (!lengthCheck(s)) {
        errorMessage = 'wrong_length'; 
    } else if (!containOnlyNumbersAnd16Digits(s)) {
        errorMessage = 'invalid characters';        
    } else if (!containDifferentDigits(s)) {
        errorMessage = 'only one type of number';        
    } else if (!evenFinalDigit(s)) {
        errorMessage = 'odd final number';
    } else if (!sumGreater16(s)) {
        errorMessage = 'sum less than 16';
    }

    if (errorMessage === "") {
        return { valid: true, number: s };        
    } else {
        return { valid: false, number: s, error: errorMessage };
    }
};

var lengthCheck = function(s) {
    if (s.length === 19) {
        return true;
    }
    return false;
}

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