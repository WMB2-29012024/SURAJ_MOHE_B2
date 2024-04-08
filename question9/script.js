const ul = document.querySelector('ul');
const btn = document.getElementById('next-btn');
const pre = document.getElementById('pre-btn');
const loader = document.getElementById("loader")
let dataId = 1;

async function displayData() {
  
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${dataId}`);
        const data = await response.json();
        console.log(data);
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        if(data.completed == true){
            checkbox.checked =true
        }
        const listItem = document.createElement('li');
        const  listItem2 = document.createElement('p');
        listItem2.innerHTML = `userId : ${data.id}`;
        console.log(listItem2);
        listItem.innerHTML = `Title : ${data.title}`;
        ul.appendChild(checkbox)
        ul.appendChild(listItem2);
        ul.appendChild(listItem);
    } catch (error) {
        console.log('no data to fetch');
    }
}

btn.addEventListener('click', async () => {
    dataId += 1;
    ul.innerHTML = '';
    loader.style.display = "inline-block"
    await displayData();
    loader.style.display = "none"

});

pre.addEventListener('click', async () => {
    dataId -= 1;
    ul.innerHTML = '';
    loader.style.display = "inline-block"
    await displayData();
    loader.style.display = "none"

})

displayData();