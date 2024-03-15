// Problem 4: Palindrome Check using Queue

// Problem Statement
// Given a string, determine if that string is a palindrome using a queue data structure.

// A palindrome is a word, number, phrase, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// Examples:

// Input: "madam"
// Output: True
// Explanation: The word "madam" reads the same forwards and backwards.

// Input: "openai"
// Output: False
// Explanation: The word "openai" does not read the same forwards and backwards.

// Input: "A man a plan a canal Panama"
// Output: True
// Explanation: The phrase "A man a plan a canal Panama" reads the same forwards and backwards when we ignore spaces and capitalization.

class Node {
     // Node class for storing data and 
     // the reference to the next node
     constructor(data) {
         this.data = data;
         this.next = null;
     }
 }
 class Queue {
     // Queue class using linked list
     constructor() {
         this.front = null;
         this.rear = null;
         this.size = 0;
     }
     // Add an element to the rear of the queue
    enqueue(data) {
     let newNode = new Node(data);
     if (this.rear === null) { // queue is empty
         this.front = this.rear = newNode;
     } else {
// adding the new node in the next of current rear node
         this.rear.next = newNode; 
       
//. changing the current rear node with the new one
         this.rear = newNode; 
     }
     this.size++;
 }
 // Remove an element from the front of the queue
 dequeue() {
     if (this.front === null) {
         return null;
     }
     let temp = this.front;
     this.front = this.front.next;
     /** when queue has only 1 element */
     if (this.front === null) {
         this.rear = null;
     }
     this.size--;
     return temp.data;
 }
 // Get the front element of the queue
 peek() {
     /** when queue is empty */
     if (this.front === null) {
         return null;
     }
     return this.front.data;
 }

 // Check if the queue is empty
 isEmpty() {
     return this.size === 0;
 }

 // Get the number of elements in the queue
 getSize() {
     return this.size;
 }
 }

 const str = "Madam";

 const palindromeString = (s) =>{
       let temp = s.toLowerCase().replaceAll(" ",'');
       let a = "";
       const queue = new Queue(temp.length);

       for (let i = temp.length -1; i>=0; i--) {
          queue.enqueue(temp[i])
       }
       while(!queue.isEmpty()){
          a+=queue.dequeue()
       }
      return temp===a?true:false;
 }

 console.log(palindromeString(str));