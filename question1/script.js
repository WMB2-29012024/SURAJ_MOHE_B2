
 const url = "https://jsonplaceholder.typicode.com/todos"


async function getData(){
          let data = await fetch(url)
           let response = await data.json()
          console.log(response);
}

getData()