const menu = document.getElementById("menu")
const sideMenu = document.getElementById("side-menu")

let flag = false;

menu.addEventListener("click", function (e) {
     if (flag === false) {
          menu.innerHTML = `☰`
          sideMenu.style.left = "-700px"
          flag = true
     } else {
          menu.innerHTML = `✕`
          sideMenu.style.left = "0px"
          flag = false
     }
})