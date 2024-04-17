import { addComment } from "./commnetForm.js"
import {showComment} from "./commentList.js"

const btnComment = document.getElementById("btn")
const form = document.querySelector("form")
form.addEventListener("submit",function(e){
     e.preventDefault()
     addComment()
     showComment();
     
     // console.log(e)
})