const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const form = document.querySelector("form");
const ptag= document.getElementById("ptag")
const button = document.querySelector("button")

form.addEventListener("submit",function(e){
     e.preventDefault();
     let inputvalue1 = parseInt(input1.value)
     let inputvalue2 = parseInt(input2.value)

     let sum = inputvalue1 + inputvalue2 ;

     ptag.innerHTML = sum
       

})