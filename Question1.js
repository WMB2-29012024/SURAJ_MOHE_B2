// Problem 5: Zigzag Iterator

// Problem Statement
// Given two 1d vectors, implement an iterator to return their elements alternately.

// For example, given two 1d vectors:
// v1 = [1, 2]
// v2 = [3, 4, 5, 6]

// By calling next() repeatedly until hasNext() returns false, the order of elements returned by next should be: [1, 3, 2, 4, 5, 6].

// Example 1:
// i = ZigzagIterator([1, 2], [3, 4, 5, 6])
// print(i.next()) # returns 1
// print(i.next()) # returns 3
// print(i.next()) # returns 2
// print(i.next()) # returns 4
// print(i.next()) # returns 5
// print(i.next()) # returns 6
// print(i.hasNext()) # returns False

// Example 2:
// i = ZigzagIterator([1, 2, 3, 4], [5, 6])
// print(i.next()) # returns 1
// print(i.next()) # returns 5
// print(i.next()) # returns 2
// print(i.next()) # returns 6
// print(i.next()) # returns 3
// print(i.next()) # returns 4
// print(i.hasNext()) # returns False

// Example 3:
// i = ZigzagIterator([1, 2], [])
// print(i.next()) # returns 1
// print(i.next()) # returns 2
// print(i.hasNext()) # returns False



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

class ZigzagIterator{
     
     constructor(arr1,arr2){
        this.queue = new Queue(arr1.length + arr2.length)
     //    let maxArray = arr1.length>arr2.length ? arr1:arr2
     //    let minArray = arr2.length>arr1.length  ? arr2:arr1
     
          let i =0;

          while(i<arr1.length && i<arr2.length){
               this.queue.enqueue(arr1[i])
               this.queue.enqueue(arr2[i])
               i+=1;
          }

          while(i>arr1.length){
               this.queue.enqueue(arr1[i])
               i+=1;
          }
          
          while(i<arr2.length){
               this.queue.enqueue(arr2[i])
               i+=1;
          }
          
     }
     next(){
          return   this.queue.dequeue();
           }
     hasNext(){
         return this.queue.isEmpty()
     }
}
 
let v1 = [1,2];
let v2= [3,4,5,6];


const i = new ZigzagIterator(v1,v2)

console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());