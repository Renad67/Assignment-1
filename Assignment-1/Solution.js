// A. Part 1: Coding Questions :
// 1. Convert the string "123" to a number and add 7.
let str = '123';
console.log(Number(str) + 7);

// 2. Check if the given variable is falsy and return "Invalid" if it is.
let x = 0;
if ( !x ) {
  console.log("Invalid");
}

//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue

for ( let i = 1; i <= 10 ; i++ ){
    if(i % 2 === 0)
        continue;
    else
        console.log(i);
}

// 4. Create an array of numbers and return only the even numbers using filter method.
function checkEven(even){
    if(even % 2 == 0)
        return even;
}
let arr = [1,2,3,4,5];
console.log(arr.filter(checkEven));

// 5. Use the spread operator to merge two arrays, then return the merged array.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3)

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).
let dayNumber = 2;

switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}

// 7. Create an array of strings and return their lengths using map method
function arrLength(str){
    return str.length;
}
let arrString = ["a", "ab", "abc"];
console.log (arrString.map(arrLength));

// 8. Write a function that checks if a number is divisible by 3 and 5.
function check(x1){
if (x1 % 3 == 0 && x1 % 5 == 0) {
  console.log("Divisible by both");
} else
     console.log("Not Divisible by both");
}
check(15);

// 9. Write a function using arrow syntax to return the square of a number
let square = (x) => console.log(x*x);
square(5);

// 10.Write a function that destructures an object to extract values and returns a formatted string.
function Person(name , age){
    return `${name} is ${age} years old`;
}
console.log(Person( "John",  25));

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum.
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log(sum(1,2,3,4,5));

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function delayedSuccess() {
    const users = [
        { name: "Ahmed", age: 25 },
        { name: "Sara", age: 22 },
        { name: "Ali", age: 30 }
    ]
  return new Promise((resolve , reject) => {
    setTimeout(() => { 
        if (users){
            resolve("Success");
        } else {
            reject('not found');
        }
    }, 3000)
    })
}
delayedSuccess("Ahmed").then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
        
// 13. Write a function to find the largest number in an array.
function findMax() {
  let max = 0; 
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMax(1, 3, 7, 2, 4));
// 14. Write a function that takes an object and returns an array containing only its keys.
function keys(object ){
    return Object.keys(object);
}
let object1 = { name: "John", age: 30 };
console.log(keys(object1));

// 15. Write a function that splits a string into an array of words based on spaces.
function splitString(sentence) {
    return sentence.split(" ");
}
let input = "The quick brown fox";
console.log(splitString(input)); 

/*
B. Part 2: Essay Questions (2.5 Grade):
1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
    -> forEach is an array method
    -> for...of is a loop 
    forEach can't be stopped or broken out of once it starts so i would use for ...of when i need to break out of a loop or stop it.

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
    -> TDZ:
    console.log(x);
    let x = 5;
    in .log(x) it gives x can't be accessed because it is still in the Temporal Dead Zone it knows it exists but it can't be accessed until it is declared.

    -> Hoisting:
    console.log(y);
    var y = 10;
    In .log(y) it gives undefined because of hoisting var declarations are hoisted to the top of their scope and initialized with a value of undefined.

3. What are the main differences between == and ===? (0.5 Grade)
    == checks if the values are equal 
    === checks if the values and the types are equal

4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)

    -> try-catch is used to handle errors in code. 
    The code that may throw an error is placed inside the try block. If an error occurs, the control is transferred to the catch block 
    where the error can be handled gracefully without crashing the program.
    This is especially important in async operations because they often involve external resources (like network requests) that can fail,
    and using try-catch allows developers to manage these failures effectively.

5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
    -> Type conversion is the process of converting a value from one type to another manually by the developer
    for example:
    console.log(Number("20") + 5);

    -> Type Coercion is the process of converting a value from one type to another automatically by JavaScript
    for example:
    console.log("20" * 5);
*/
