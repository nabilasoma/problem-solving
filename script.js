const a = 5; 
const b = 6;
const c = 21;
const d = 12;

const additionalResult = a + b;
console.log(additionalResult);

const subtractionResult  = c - d;
console.log(subtractionResult);
    

const multiplyResult = additionalResult * subtractionResult;
console.log(multiplyResult);

const evenOddResult = multiplyResult % 2 == 1;

console.log(evenOddResult);



// Math two 

let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

const multiply = result * result2;
result  = multiply;
console.log(result.toFixed(2));
const finalResult  = typeof result;
console.log(finalResult);


// Math three 

// Group 1: Weight Comparison Test
let weight1 = 150;
let weight2 = 200;
let statement1 = "Variable 1 is heavier than Variable 2";

let weightComparison = weight1 > weight2;
console.log(statement1 + ": " + weightComparison);

// Group 2: Height Comparison Test
let height1 = 175;
let height2 = 180;
let statement2 = "Variable 1 is taller than Variable 2";

let heightComparison = height1 > height2;
console.log(statement2 + ": " + heightComparison);

// Group 3: Password Match Test
let password1 = "mySecretPwd";
let password2 = "mySecretPwd";
let statement3 = "Passwords match";

let pwdMatch = password1 === password2;
console.log(statement3 + ": " + pwdMatch);


