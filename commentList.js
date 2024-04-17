const showComment = () =>{
     const savedComment = JSON.parse(localStorage.getItem("comment") || "[]")
     console.log(savedComment);
}
export {showComment}