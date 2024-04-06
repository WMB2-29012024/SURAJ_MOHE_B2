
 const p = document.querySelector("p")
API = "https://jsonplaceholder.typicode.com/todos"


// async function getData(){
//      let data = await fetch(API)
//       let response = await data.json()
//      console.log(response);
  
// }
// if(response){
//      p.innerText = getData();
// }
// else{
//      p.innerText = "error"
// }


async function getData(){

     try{

     let data = await fetch("https://jsonplaceholder.typicode.com/todos")
      let response = await data.json()
      console.log(response);
      p.innerText = "Data Fetched"
     }catch(error){
          p.innerText = "Failed to Fetched Data"
     }
}
getData()