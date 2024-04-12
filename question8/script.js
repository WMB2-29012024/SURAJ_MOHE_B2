const select = document.querySelector("select");
const main = document.getElementById("main")
// const userAPI =  (`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(response=>{
//           let data =  response.json()
//           console.log(data)
// })

function getUser(userID){
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
.then(res=>res.json())
.then(data => {
     
     // console.log(data[0].userId)
     let titile = data[0].titile
     main.innerHTML = `<h3>title : ${titile}</h3>`

     return data[0].userId
} 
).then(userID=>{
     console.log({userID});
     return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userID}`)
}).then(res=>res.json()).then(data2=>{
     // console.log(data2[0].body);
     let body = data2[0].body
     main.innerHTML = `<h4>body: <br>${body}</h4>`
     console.log(data2[0].name);
     // let name = data2[0].name
     // main.innerHTML = `<h3>Name : ${name}</h3>`
   

})
.catch(err=>console.log(err))
          

}

select.addEventListener('change',(e)=>{
     getUser(e.target.value)

})