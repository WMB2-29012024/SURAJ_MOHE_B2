// Branch Name: B2_W6_D1
      
/* Question 17: Split the string "A new string with words." into an array of substrings with a limit of 3 and log the result.
*/

// Use the .split() method with a limit


const splitString = "A new string with words.";
const newString = splitString.split(" ",3);

console.log(newString);