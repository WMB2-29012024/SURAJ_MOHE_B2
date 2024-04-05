const form = document.querySelector("form")
const btn=document.querySelector('button');
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input1")
const other = document.getElementById("other");
const xyz = document.getElementById("xyz")

xyz.addEventListener("change",function(e){
     e.preventDefault();
     console.log(e.target);
     ptag.innerHTML = e.target.value
})