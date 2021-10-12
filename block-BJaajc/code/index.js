
// - Positive Test verifies expected behavior with valid data.
// - Negative Test verifies expected behavior with invalid data.
// - Edge Case is a subset of positive tests, which checks the extreme edges of valid values.

// 1. Write a function named `getFullName` that accepts two input `firstName` and `lastName` and return the `fullName`
function getFullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}

// 2. Write a function named `isPalindrome` that accepts one input returns `true` or `false` based on wether the value passed is palindrome or not.
function isPalindrome(str){
    let reversedStr=((str.split('')).reverse()).join("");
    return str===reversedStr;
}
// 3. Create 2 functions that calculate properties of a circle, using the definitions here.
const PI=3.14;

// - Create a function called `getCircumfrence`:
function getCircumfrence(radius){

    return `The circumference is ${2*PI*radius}`

}
// Pass the radius of a circle to the function and it returns the circumference based on the radius, and output `The circumference is NN`.

// - Create a function called `getArea`:
function getArea(radius){

    return `The area is ${PI*radius*radius}`
}
// Pass the radius to the function and it returns the area based on the radius, and output `The area is NN`.

module.exports={
    getFullName,
    isPalindrome,
    getCircumfrence,
    getArea,
}