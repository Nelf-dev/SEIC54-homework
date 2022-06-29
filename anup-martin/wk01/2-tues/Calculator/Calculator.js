// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal. 

const squareNumber = function (number) {
    const answer = number * number;
    console.log(`The result of the square  is th ${ answer } for the ${ number }`);
};
squareNumber(19875);


const halfNumber = function(number){
    const answer = number/2;
    console.log(`The half of ${ number } is ${ answer }`);
};
halfNumber(1000);


const percentOf = function(a, b){
    const answer = a/b * 100;
    console.log (`${ a } is ${ answer }% of the ${ b }`);
};
percentOf(300, 1745);


const areaOfCircle = function(radius){
    const answer = Math.PI * radius * radius;
    console.log(`The are of the circle is ${ answer } round it of at ${Math.round(answer, 2)}`);
};
areaOfCircle(2);


// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const mathCalculation = function (a) {
    const halfNumber = a/2;
    const squareNumber = a * a;
    const areaOfCircle = Math.PI * 13 * 13;
    const percentOf = areaOfCircle/squareNumber * 100;
    console.log(`Half of ${ a } is ${ halfNumber }. ${ halfNumber } squared is ${ squareNumber }. The area of the circle with the radius of the ${ squareNumber } is the ${ areaOfCircle}. The result of the ${ squareNumber} is the percentage of result of the ${ areaOfCircle }`); 
}
mathCalculation(4);


