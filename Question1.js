// Problem Statement

// Given a string s containing (, ), [, ], {, and } characters. Determine if a given string of parentheses is balanced.

// A string of parentheses is considered balanced if every opening parenthesis has a corresponding closing parenthesis in the correct order.

// Example 1:

// Input: String s = "{[()]}";
// Expected Output: true
// Explanation: The parentheses in this string are perfectly balanced. Every opening parenthesis '{', '[', '(' has a corresponding closing parenthesis '}', ']', ')' in the correct order.


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
const s = "{[()]}";
const isValidParathesis = (s) =>{
     const stack  = new Stack(s.length);
     for(let i =0; i<s.length; i++ ){
          const currentChar = s.charAt(i);
          if(currentChar === '[' || currentChar === '(' || currentChar === '{'){
               stack.stackPush(currentChar);
          }else{
               const peekElement = stack.peek();
               if(!stack.isEmpty()){
                    let isValid = false;
                    switch(currentChar){
                         case ')':
                              isValid = peekElement === '(';break;
                         case ']':
                              isValid = peekElement === '[';break;
                         case '}':
                              isValid = peekElement === '{';break;
                    }
                    if(isValid){
                         stack.stackPop();
                    }else{
                         return false;
                    }
               }else{
                    return false;
               }
                
          }
     }
     return stack.isEmpty()
}
console.log(isValidParathesis(s));
