// Branch Name: B2_W4_D3

//  Question 1: Write a for loop and log each element, starting from 0th index.

const numArr = [1, 234_45, 89,75, 4e9]
const strArr = ["asd", "qwe", "ert", "asdasdzxczxc"]
const mixArr = ["first", "234_45", {first: "Web", last: "Masters"}, true]

function printArrElems(arr){
   for(let i=0; i<=arr.length-1;i++){
        console.log(arr[i]);
}

}
printArrElems(numArr)
printArrElems(strArr)
printArrElems(mixArr)
