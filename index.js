let books = ["Book One", "Book Two", "Book Three"];

function Book(title, author, numPages){
    title = title;
    author = author;
    numPages = numPages;
}

function addBookToLibrary(bookArr){
    bookArr.foreach(book => console.log(book));
}

function openMenu(){
    console.log("This event listener is connected")
}

let bookList = document.getElementsByClassName("book-list");
let addBtn = document.getElementById("add-btn")

addBtn.addEventListener("click", openMenu);


