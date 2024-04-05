const main=document.getElementById("main")
const dark = document.getElementById("dark")
const light = document.getElementById("light")
const p = document.querySelector("p")
const select = document.getElementById("select")

// console.log({main});

select.addEventListener("change",function(e){
     console.log(select.value);
     if(select.value=="dark"){
          main.style.backgroundColor = "white"
          p.style.color = "black"
     }else if(select.value=="light"){
          main.style.backgroundColor = "black"
          p.style.color = "white"

     }
})