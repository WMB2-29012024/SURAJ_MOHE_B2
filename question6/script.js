const p = document.querySelector("p")
const button = document.querySelector("button")
 const loader = document.getElementById("loader")
 const API = "https://jsonplaceholder.typicode.com/todos"

async function getData(){

     try{
      loader.style.display = "none"
     loader.style.display = "initial"
     let data = await fetch(API)
     let response = await data.json()
     loader.style.display = "none"
     p.innerText = "Data Fetched"
     console.log(response);


     }catch{
              loader.style.display = "none"
               p.innerText = "Faild to Catch Data"
     }
   
}
button.addEventListener("click",function(e){
     getData(API)
})

