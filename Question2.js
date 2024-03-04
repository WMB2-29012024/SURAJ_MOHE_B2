// Branch Name: B2_W4_D3

//  Question 2: Write a for loop starting from last index, and store each element in a new array. Log the array.

const numArr = [1, 234_45, 89,75, 4e9]
const strArr = ["asd", "qwe", "ert", "asdasdzxczxc"]
const mixArr = ["first", "234_45", {first: "Web", last: "Masters"}, true]
    
function ReverseElems(arr){
     for(let i=arr.length-1; i>0; i--)
     console.log(arr[i]);
}

ReverseElems(numArr)
ReverseElems(strArr)
ReverseElems(mixArr)
