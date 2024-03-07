// Given a 2D array accounts of m x n size, accounts[j] represents money in the jth bank account of the ith customer.

// Return the wealth of the richest individual from a set of bank customers.

// Imagine every customer has multiple bank accounts, with each account holding a certain amount of money. The total wealth of a customer is calculated by summing all the money across their multiple accounts.

// Examples

// Example 1:
// Input: [[5,2,3],[0,6,7]]
// Expected Output: 13
// Justification: The total wealth of the first customer is 10 and of the second customer is 13. So, the output is 13 as it’s the maximum among all customers.



const arr =  [[5,2,3],[0,6,7]];
const bigArray = (arr) =>{
     let sum =0;
  for (let i = 0; i < arr.length; i++) {
     let userSum = 0;
     for (let j = 0; j< arr[i].length; j++) {
           userSum += arr[i][j];
     }
     sum = sum<userSum? sum = userSum:sum;
  }
  return sum
}

console.log(bigArray(arr));