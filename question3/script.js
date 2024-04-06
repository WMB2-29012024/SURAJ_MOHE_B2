
const button = document.querySelector("button")
API = "https://jsonplaceholder.typicode.com/todos"

async function getData(){
     let data = await fetch(API)
      let response = await data.json()
     console.log(response);
}

button.addEventListener("click",function(e){
     getData()
})
