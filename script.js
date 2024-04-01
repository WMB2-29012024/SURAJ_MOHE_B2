const inputElem = document.querySelector("input");
const abc = document.querySelectorAll("xxx")
const submitBtn = document.getElementById("submitbtn");
const ptag = document.getElementById("ptag");

inputElem.addEventListener("change",function(e){
     e.preventDefault();
    let a = e.target.value
 
    submitBtn.addEventListener("click",function(e){
          e.preventDefault();
          
          ptag.innerHTML = "Hii " +a
          inputElem.value = ""
    })

})