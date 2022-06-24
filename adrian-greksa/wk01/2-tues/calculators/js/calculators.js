// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
const squareNumber = function (number) {
    const answer = number ** 2;
    console.log(`The result of squaring the number ${ number } is ${ answer }.`);
};
squareNumber(3);

const halfNumber = function (number){
    const answer = number/2;
    console.log(`Half of ${ number } is ${ answer }.`);
};
halfNumber(3);

const percentOf = function (num1, num2) {
    const answer = num1/num2 * 100;
    console.log(`${ num1 } is ${ answer }% of ${ num2 }.`);
};
percentOf(1.5, 2);

const areaOfCircle = function (radius) {
    const area = Math.PI * radius ** 2;
    console.log(`The area for a circle with radius ${ radius } is ${ Math.round(area, 2) }`);
};
areaOfCircle(2);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const mathCalculations = function (num) {
    const halfNumber = num/2;
    const squareNumber = halfNumber ** 2;
    const areaOfCircle = Math.PI * squareNumber **2;
    const percentOf = areaOfCircle/squareNumber * 100;
    console.log(`half of ${ num } is ${ halfNumber }. ${ halfNumber } squared is ${ squareNumber }. The area of a circle with a radius of ${ squareNumber } is ${ areaOfCircle }. The percentage that area, ${ areaOfCircle }, is of the squared result, ${ squareNumber }, is ${ percentOf }`);
};
mathCalculations(5);

// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
const DrEvil = function (amount) {
    let result;
    if (amount === 1000000) {
        result = `${ amount } dollars (pinky)`;
    } else {
        result = `${ amount } dollars`;
    }
    return console.log(result);
};

DrEvil(120);
DrEvil(1000000);



// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
const mixup = function (str1, str2) {
    const newStr1 = str2[0] + str1.slice(1);
    const newStr2 = str1[0] + str2.slice(1);
    return console.log(`${ newStr1 } ${ newStr2 }`);
};

mixup('james', 'haberfield');


// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
const fixStart = function (str) {
    for (let i = 1; i <= str.length; i++) {
        if (str[i] = str.charAt(0)) {
            str.replace(str[i], str.charAt(0));
            console.log(str[i]);
        } else {
            continue;
        };
    };
    console.log(str);
};

fixStart('babble');

const fixStart2 = function (str) {
    let str2 = str.slice(1);
    str2.replaceAll(str[0], "'*'");
    console.log(str2);
};

fixStart2('babble');


// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
const verbing = function (str) {
    if (str.length >= 3 && str.endsWith('ing')) {
        str = `${ str }ly`
    } else if (str.length >=3) {
        str = `${ str }ing`
    } else {
    };
    console.log(str)
};

verbing('swim');
verbing('swimming');
verbing('go');

// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

    if (str.indexOf('not') < str.indexOf('bad')) {
        let newStr = str.replace('not')
    };
};