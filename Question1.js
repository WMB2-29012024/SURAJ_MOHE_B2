// Problem Statement

// Given a positive integer n, write a function that returns its binary equivalent as a string. The function should not use any in-built binary conversion function.

// Examples

// Example 1:

// Input: 2
// Output: "10"
// Explanation: The binary equivalent of 2 is 10.

class Stack{
     constructor(size){
       this.stack =[] ;
       this.maxSize = size;
       this.stackSize = 0;
     }
     peek(){
       //return the last element
       //without removing it  from stack
       if(this.stackSize === 0){
          return "Stack is empty";
       }else{
          const lastElem = this.stackPop()
          this.stackPush(lastElem)
          return lastElem;
       }
     }
     isEmpty(){
          //return this.StackSize ===0?true : false;
          if(this.stackSize ===0){
               return true;
          }else{
               return false;
          }
     }
     stackPush(item){
          //wathing for stack overflow issue
          if(this.stackSize >= this.maxSize){
               return new Error("Stack Overflow")
          }
          this.stack.push(item)
          this.stackSize +=1
          return this.stackSize
     }
     stackPop(){
          //wathing for stack underflow issue
          if(this.stackSize ===0){
               return new Error("Stack Underflow")
          }
          this.removeItem = this.stack.pop()
          this.stackSize -=1;
          return this.removeItem
     }
}
  const s = 2;

const arrayOfString = (num) =>{
   
     let stack = new Stack();
     let string = "";
      while(num !== 0){
          if(num % 2 ==0){
               stack.stackPush("0")
          }else{
               stack.stackPush("1")
          }
          num = Math.floor(num/2)
      }

     return stack;
}
console.log(arrayOfString(s));


 