// Branch Name: B2_W6_D1
      
/* Question 3: Write a function that takes a number as input and returns the number formatted to have exactly two digits after the decimal point using the .toFixed() method.
*/

function formatToTwoDigits(num) {
  
  return num.toFixed(2);
}

console.log(formatToTwoDigits(3)); 
console.log(formatToTwoDigits(3.14159));
