const form = document.querySelector("form")
const input = document.querySelector("input")
const p = document.querySelector("p")
const h4 = document.querySelector("h4")


// console.log(form);

input.addEventListener("change",function(e){
     console.log(e.target.files);
     const fileData = [...e.target.files];
     // console.log(e.target.files);
     // console.log(e.target.files[0].size);
     let size = e.target.files[0].size
     let name = e.target.files[0].name

     fileData.forEach(fileElem => {
               // console.log(fileElem);
               // h4.innerHTML = fileElem.name
               // p.innerHTML = fileElem.size/Math.pow(10,6) + "KB"

               const fileInfo = document.createElement('div');
               fileInfo.innerHTML = `<h4>${fileElem.name}</h4><p>${fileElem.size / Math.pow(10, 6)} KB</p>`;
               fileData.appendChild(fileInfo);

     });

     // h4.innerHTML = name
     // p.innerHTML = size/Math.pow(10,6) + "KB"

})