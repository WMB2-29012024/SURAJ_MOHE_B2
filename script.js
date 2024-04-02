const  form  = document.getElementById("form")
const inputElem = document.querySelector(".input");
const emailInput = document.querySelector(".email");
const box = document.getElementById("box")
const password = document.querySelector(".password")
const confrmPassword = document.querySelector(".confrmpassword")
const ptag = document.getElementById("ptag")


form.addEventListener("submit",function(e){
e.preventDefault();
console.log(`Full Name: ${inputElem.value}`);
console.log(`Email: ${emailInput.value}`);
// console.log(`Password: ${password.value}`);
// console.log(`conform Password: ${confrmPassword.value}`);

if(password.value === confrmPassword.value){
     window.alert("Form Submitted")
     console.log(`Password: ${password.value}`);
   console.log(`conform Password: ${confrmPassword.value}`);
}else{
     ptag.innerHTML =  `password and conform password are diffrent`
}


const clutter = `<h3>Full Name: ${inputElem.value}</h3>
<h3>Email: ${emailInput.value}</h3>
<h3>Password: ${password.value}</h3>
<h3>Conform Password: ${confrmPassword.value}</h3>`
box.innerHTML += clutter

})                                                                                                                                                                                                                                                                                                                                                                                                                                                      