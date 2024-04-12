const listContainer = document.getElementById("list-container")
const inputSearch = document.getElementById("inputsearch")

let dataList;
const POST_API = "https://jsonplaceholder.typicode.com/posts"

const getData = async () =>{
     const data = await fetch(POST_API)
     const jsonResp = await data.json();
     dataList = jsonResp;

     creatUI(dataList)
}
getData()

function creatUI(dataList){
     listContainer.innerHTML = "";
     listContainer.innerHTML = `${dataList.length}`
     dataList.forEach(listItem => {
          (listContainer.innerHTML +=`<li>
               <div><b>Title:</b>${listItem.title}</div>
               <div><b>Body:</b>${listItem.body}</div>
          </li>`)
     });
}
function searchData(inputEvent,keys){
     const searchvalue = inputEvent.target.value
}

const filterData = dataList.filter((postObj)=>{
     for(const key of keys){
          const condition = postObj[key]
          .toLowerCase()
          .includes(searchvalue.toLowerCase())
          if(condition === true){
               return true
          }
     }
     return postObj["body"].toLowerCase()
               .includes(searchvalue.toLowerCase())
})

creatUI(filterData)







// function getPost(){
//      fetch("https://jsonplaceholder.typicode.com/posts")
//      .then(res=>res.json()).then(data=>{
//           console.log(data);
//           data.forEach(element => {
//                console.log(element);
//                const li = document.createElement("p")
//                li.innerHTML =`<h2><h1>ttitle-:</h1>${element.title}</h2>
//                 <h3><h1>Body:-</h1>${element.body}</h3>`
//                main.appendChild(li)

//           });
//      })
// }

// getPost() 

// inputSearch.addEventListener("input",function(e){
//      console.log(e.target.value)
// })
