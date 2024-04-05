 const selectItem = document.getElementById("select");
 const ptag = document.getElementById("ptag")


 selectItem.addEventListener("change",function(e){
     ptag.innerHTML = selectItem.value
 })