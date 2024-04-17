const addComment = ()=>{
     const commnetInputElemnet = document.getElementById("commentInput")

     if(commentInput.value){
     // console.log(commnetInput.value);
     const commentInputDate = new Date().toLocaleString()
     const commentData = {
          date: commentInputDate,
          text: commnetInputElemnet.value
     }
     const savedComment = JSON.parse(localStorage.getItem("comment") || "[]")
     // console.log(savedComment);
     savedComment.push(commentData)
     localStorage.setItem('comment',JSON.stringify(savedComment))
     commnetInputElemnet.value = ""
     }else{
          alert("add somthing")
     }
}
export {addComment}