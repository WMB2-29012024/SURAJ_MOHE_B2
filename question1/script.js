const inputElem = document.getElementById("input");
const ptag = document.getElementById("ptag");

inputElem.addEventListener("keyup",function(e){
     // console.log(inputElem.value)
     ptag.innerHTML = inputElem.value
     
})