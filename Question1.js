// Given a one-dimensional array of integers, create a new array that represents the running sum of the original array.
// The running sum at position i in the new array is calculated as the sum of all the numbers in the original array from the 0th index up to the i-th index (inclusive). Formally, the resulting array should be computed as follows: result[i] = sum(nums[0] + nums[1] + ... + nums[i]) for each i from 0 to the length of the array minus one.

// Examples

// Problem Statement
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



const num = [1, 2, 3, 4];

const hasDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(hasDuplicate(num));
