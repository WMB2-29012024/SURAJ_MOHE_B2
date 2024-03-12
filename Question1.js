// Problem Statement

// Given a string, write a function that uses a stack to reverse the string. The function should return the reversed string.

// Examples

// Example 1:

// Input: "Hello, World!"
// Output: "!dlroW ,olleH"
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

const s = "Hello, World!";

const stringWorld =(str) =>{
     let string = "";
     let stack = new Stack(s.length)
     for (let i = 0; i<str.length; i++) {
          stack.stackPush(str[i])
     }
     let abc ="";
     while(stack.stackSize !==0){
          abc += stack.stackPop();
     }
     return abc;
}

console.log(stringWorld(s));