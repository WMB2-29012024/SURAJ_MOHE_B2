// // Given a one-dimensional array of integers, create a new array that represents the
//  running sum of the original array.
// // The running sum at position i in the new array is calculated as the sum of all the 
// numbers in the original array from the 0th index up to the i-th index (inclusive). 
// Formally, the resulting array should be computed as follows: result[i] = sum(nums[0] + nums[1] + ... + nums[i]) 
// for each i from 0 to the length of the array minus one.

const arr =   [-1, 2, -3, 4, -5];

const sumArrayElem = (arr) =>{
         let arr1 = [];
         let sum = 0;
     for (let i = 0; i < arr.length; i++) {
            sum  = sum + arr[i] 
            let c = sum;
            arr1.push(c)
     }
    return arr1;
}

console.log(sumArrayElem(arr));