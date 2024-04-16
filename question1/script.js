const nextBtn = document.getElementById("next-button")
const postId = document.getElementById("post-id")
const postTitle= document.getElementById("post-title")
const postBody= document.getElementById("post-body")

let currentData =1
let debounceTimer;


nextBtn.addEventListener("click",(data)=>{
     currentData++
     clearTimeout(debounceTimer)
    debounceTimer =   setTimeout(()=>{
      fetchPostData()
    },2000)
})
const renderData = (data) =>{
     postId.innerHTML = `PostId : ${data.id}`
     postTitle.innerHTML = `PostTitle : ${data.title}`
     postBody.innerHTML = `PostBody : ${data.body}`
}

const fetchPostData = async () =>{
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentData}`)
     const data = await response.json()
     // console.log({data});
     renderData(data)
}
fetchPostData()