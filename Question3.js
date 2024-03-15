// Problem 6: Max of All Subarrays of Size 'k'

// Problem Statement
// Given an integer array and an integer k, design an algorithm to find the maximum for each and every contiguous subarray of size k.

// Examples:

// Input: array = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
// Output: [3, 3, 4, 5, 5, 5, 6]
// Description: Here, subarray 1,2,3 has maximum 3, 2,3,1 has maximum 3, 3,1,4 has maximum 4, 1,4,5 has maximum 5, 4,5,2 has maximum 5, 5,2,3 has maximum 5, and 2,3,6 has maximum 6.

// Input: array = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13], k = 4
// Output: [10, 10, 10, 15, 15, 90, 90]
// Description: Here, the maximum of each subarray of size 4 are 10, 10, 10, 15, 15, 90, 90 respectively.

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
 
 
const array = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13], k = 4

const arrayOfMaxValue = (arr,k) =>{
     let finalarr  =[];
     let queue = new Queue(arr.length)
     let maxValue = Number.MIN_VALUE

     for (let i = 0; i < arr.length; i++) {
          maxValue = Math.max(maxValue,arr[i])
          if(i >= k-1){
              queue.enqueue(maxValue)
          }
          while(!queue.isEmpty()){
               finalarr.push(queue.dequeue())
          }
     }


     return finalarr;
}
console.log(arrayOfMaxValue(array,k));


