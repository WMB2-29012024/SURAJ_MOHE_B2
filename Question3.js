// Branch Name: B2_W4_D3

//  Question 3: Write a for-loop to reverse a string.

const strArr = "asdasdzxczxc";

function ReverseStr(arr){
       let ReversedStr= '';

     for(let i=arr.length - 1; i>=0; i--){
         ReversedStr+=arr[i]
     }
     return ReversedStr;
}
console.log(ReverseStr(strArr));
