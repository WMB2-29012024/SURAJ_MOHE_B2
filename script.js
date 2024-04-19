const menu = document.getElementById("menu")
const sideMenu = document.getElementById("side-menu")

let flag = false;

menu.addEventListener("click",function(e){
     if(flag === false){
          sideMenu.style.display = "block"
          sideMenu.style.width= "40%"
          flag = true
     }else{
          sideMenu.style.display = "none"
          flag = false
     }
})