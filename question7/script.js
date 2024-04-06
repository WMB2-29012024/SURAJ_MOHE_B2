const p = document.querySelector("p")
const main = document.getElementById("main")
const button = document.querySelector("button")
 const loader = document.getElementById("loader")
 const h1 = document.querySelector("h1")
 const ul = document.querySelector("ul")

 const API = "https://jsonplaceholder.typicode.com/todos"
async function getData(){

     try{
      loader.style.display = "none"
     loader.style.display = "initial"
     let response = await fetch(API)
     let data = await response.json()
     console.log(data);

     h1.innerHTML ="Total Length : "+ data.length;

     loader.style.display = "none"
     p.innerText = "Data Fetched"
     data.forEach(elem => {
          // console.log(elem.title);
          const titleElem = elem.title;
           const li = document.createElement("li")
          ul.appendChild(li)
          li.innerText = titleElem;
     });

     }catch{
              loader.style.display = "none"
               p.innerText = "Faild to Catch Data"
     }
   
}
button.addEventListener("click",function(e){
     getData(API)
})

