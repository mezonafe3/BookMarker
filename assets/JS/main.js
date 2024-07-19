var bookName = document.querySelector("#book-name")
var bookUrl = document.querySelector("#book-url")
var submitButton = document.querySelector("#submit")
var deleteButton;
var deleteFlag = false
var booksInfo = [];
if (localStorage.getItem("products") != null) {

    booksInfo = JSON.parse(localStorage.getItem("products"))
}

displayBooks()
function addBook() {
    var inFo = {
        book_name: bookName.value,
        book_url: bookUrl.value,
    }
    booksInfo.push(inFo)
    localStorage.setItem("products", JSON.stringify(booksInfo))
    displayBooks()
    // deleteFlag=true
}

function displayBooks() {
    var box = "";
   
    for (i = 0; i < booksInfo.length; i++) {
        box += `
        <tr class="fw-lighter" >
        <th class="p-2 w-25 text-center">${i}</th>
        <th class="p-2 w-25 text-center">${booksInfo[i].book_name}</th>
        <th class="p-2 w-25"><button class="btn btn-success mx-auto d-flex justify-content-between align-items-center px-4  green text-white" id="update" value="${i}"><i class="fa-solid fa-eye pe-2"></i><a class="text-decoration-none text-white " href="${booksInfo[i].book_url}">Visit</a></button></th>
        <th class="p-2 w-25"><button class=" delete mx-auto btn btn-danger d-flex justify-content-between align-items-center  px-4  text-white"  value="${i}"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></th>
        </tr>
        `
    }
    document.querySelector("#table-body").innerHTML = box;

    // if (deleteFlag == true) {
    //     console.log(deleteFlag)
    //     while (deleteFlag) {

    //     }
    // }

    deleteButton = document.querySelectorAll(".delete")
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function (e) {
            var index = JSON.parse(e.target.getAttribute("value"))
            console.log(index)
            deleteBook(index)
        })
    }

}
function deleteBook(index) {
    booksInfo.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(booksInfo))
    displayBooks()
}
console.log(booksInfo)
submitButton.addEventListener("click", addBook)

