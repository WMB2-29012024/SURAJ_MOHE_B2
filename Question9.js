// Branch Name: B2_W4_D3

//  Question 9: Write a for-loop, and log the current and its immediate previous element.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function priviousAlems(arr){
     let a = [];
     for(let i=0; i<arr.length - 1;i++){
          if(i == 0){
               a.push([arr[i]])
          }else{
               a.push([arr[i],arr[i-1]])
          }
     }
     return a;

}
console.log(priviousAlems(numArr));