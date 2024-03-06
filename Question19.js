// Branch Name: B2_W6_D1   

/* Question 19: Retrieve the substring "string with" from the string "A new string with words." using the correct method.
*/
// Use the .slice() method


let retriveString = "A new string with words.";
let startIndex = retriveString.indexOf("string with");
// console.log(startIndex);
let endIndex = startIndex + "string with".length

// console.log(endIndex);

const substring = retriveString.slice(startIndex,endIndex)
console.log(substring);