
// Problem Statement

// Given an array, print the Next Greater Element (NGE) for every element.
// The Next Greater Element for an element x is the first greater element on the right side of x in the array.

// Elements for which no greater element exist, consider the next greater element as -1.

// Examples

// Example 1:
// Input: [4, 5, 2, 25]
// Output: [5, 25, 25, -1]

// Example 2:
// Input: [13, 7, 6, 12]
// Output: [-1, 12, 12, -1]

// Example 3:
// Input: [1, 2, 3, 4, 5]
// Output: [2, 3, 4, 5, -1]


class Stack {
     constructor(size) {
          this.stack = [];
          this.maxSize = size;
          this.stackSize = 0;
     }
     peek() {
          //return the last element
          //without removing it  from stack
          if (this.stackSize === 0) {
               return "Stack is empty";
          } else {
               const lastElem = this.stackPop()
               this.stackPush(lastElem)
               return lastElem;
          }
     }
     isEmpty() {
          //return this.StackSize ===0?true : false;
          if (this.stackSize === 0) {
               return true;
          } else {
               return false;
          }
     }
     stackPush(item) {
          //wathing for stack overflow issue
          if (this.stackSize >= this.maxSize) {
               return new Error("Stack Overflow")
          }
          this.stack.push(item)
          this.stackSize += 1
          return this.stackSize
     }
     stackPop() {
          //wathing for stack underflow issue
          if (this.stackSize === 0) {
               return new Error("Stack Underflow")
          }
          this.removeItem = this.stack.pop()
          this.stackSize -= 1;
          return this.removeItem
     }
}

const s = [4, 5, 2, 25];

const greaterThanArray = (num) => {
     let nums = [...num]
     const stack = new Stack(num.length)

     for (let i = nums.length - 1; i >= 0; i--) {
          while (!stack.isEmpty() && nums[i] > stack.peek()) {
               stack.stackPop();
          }
          num[i] = stack.isEmpty() ? -1 : stack.peek();
          stack.stackPush(nums[i])
     }

     return num;
}
console.log(greaterThanArray(s));