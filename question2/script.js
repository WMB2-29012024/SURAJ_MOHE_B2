const url = "https://jsonplaceholder.typicode.com/todos"

function getDataPromise(url){
     return new Promise((res,rej) =>{
          fetch(url)
          .then(data => data.json())
          .then(jsonData => res(jsonData))
     })
}
getDataPromise(url)
.then(res => console.log({res}))