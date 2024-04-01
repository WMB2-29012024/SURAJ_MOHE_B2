import { userData } from './data.js'
const tableHeadElement = document.getElementById("table-head")
const tableBodyElement = document.getElementById("table-body")
const previousBtn = document.getElementById("previous -btn")
const nextBtn = document.getElementById("next-btn")
const pageNoText = document.getElementById("page-number")

let currentPage = 1;
let dataLimit = 20;
let filteredData = [];
const URL = 'https://jsonplaceholder.typicode.com/photos'

function getPaginatedData(data) {
     const startIndex = (currentPage - 1) * dataLimit;
     const endIndex = Math.min(startIndex + dataLimit, data.length)
     return data.slice(startIndex, endIndex)
}


function handleSearchInput(inputkey) {
     const searchInputValue = document.getElementById(`${inputkey}-search-input`).value;
     const filterData = userData.filter((rowData) =>
          String(rowData[inputkey]).toLowerCase().includes(String(searchInputValue).toLowerCase())
     );
     filteredData = filterData;
     currentPage = 1;
     createTableBody(getPaginatedData(filteredData))
}



function createTableHader(tableData) {
     const tableHeaderKeys = Object.keys(tableData[0]);

     tableHeaderKeys.forEach((headerkey) => {
          const tableHeaderKeyElement = document.createElement("th");
          const searchInput = document.createElement("input");
          searchInput.setAttribute("type", "search");
          searchInput.setAttribute('placeholder', `Search here your ${headerkey}`)
          searchInput.setAttribute('id', `${headerkey}-search-input`)
          tableHeaderKeyElement.innerText = headerkey;
          tableHeaderKeyElement.appendChild(searchInput);
          tableHeadElement.appendChild(tableHeaderKeyElement);

          searchInput.addEventListener('keyup', () => {
               handleSearchInput(headerkey);
          })

     })
}

function createTableBody(tableData) {
     tableBodyElement.innerHTML = ""
     tableData.forEach((rowData) => {
          const tableRowElement = document.createElement("tr");
          const tableRowValues = Object.values(rowData);
          tableRowValues.forEach((descriptionText) => {
               const tableDiscriptionElement = document.createElement("td");
               tableDiscriptionElement.innerText = descriptionText;
               tableRowElement.appendChild(tableDiscriptionElement)
          })
          tableBodyElement.appendChild(tableRowElement)
          // console.log(tableRowValues);
     })
}

previousBtn.addEventListener("click", () => {
     const currentData = filteredData.length ? filteredData : userData;
     currentPage = currentPage > 1 ? currentPage - 1 : 1;
     currentPage = currentPage;
     pageNoText.innerText = currentPage;
     createTableBody(getPaginatedData(currentData))
     console.log("clicked");
})

nextBtn.addEventListener("click", () => {
     const currentData = filteredData.length ? filteredData : userData;
     const totalPages = Math.ceil(currentData.length / dataLimit)
     currentPage = currentPage < totalPages ? currentPage + 1 : totalPages;
     pageNoText.innerText = currentPage;
     createTableBody(getPaginatedData(currentData))
     console.log("clicked next btn");
})

pageNoText.innerHTML = currentPage;
// createTableHader(userData)
// createTableBody(getPaginatedData(userData))
// console.log(getPaginatedData);

// const fetchTableData = async () => {
//      console.log("fatch data");
//      const response = await fetch(URL)
//      console.log(response);
//      if(!response.ok){
//           throw new Error("Failed to fatch data")
//      }
//      const data = await response.json()
//      return data;
// }
// fetchTableData().then((data) => {
//      createTableHader(data)
//      createTableBody(getPaginatedData(data))
// }).catch((error) => console.log(error));

fetch(URL).then(response => response.json())
.then((data) =>{
     createTableHader(data)
     createTableBody(getPaginatedData(data))
})
