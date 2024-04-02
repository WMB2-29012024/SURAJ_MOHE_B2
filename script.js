const  form  = document.getElementById("form")
const inputElem = document.querySelector(".input");
const emailInput = document.querySelector(".email");
const box = document.getElementById("box")

form.addEventListener("submit",function(e){
e.preventDefault();

console.log(inputElem.value);
console.log(emailInput.value);

const clutter = `<h3>${inputElem.value}</h3>
<h3>${emailInput.value}</h3>`

box.innerHTML += clutter

})                                                                                                                                                                                                                                                                                                                                                                                                                                                      