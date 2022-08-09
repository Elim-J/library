let library = [
    {
        title: "Book One",
        author: "Harold George",
        pages: 256
    },
    {
        title: "Book Two",
        author: "Sarah Pi",
        pages: 123
    },
    {
        title: "The World's Longest Book",
        author: "Some Random Person",
        pages: 2341333212
    },
    {
        title: "Book...",
        author: "Harold George",
        pages: 256
    },
    {
        title: "Book???",
        author: "Sarah Pi",
        pages: 123
    },
    {
        title: "Book!",
        author: "Some Random Person",
        pages: 234
    }
];



function Book(title, author, numPages){
    this.title = title;
    this.author = author;
    this.pages = numPages;
}

function addToLibrary(e){
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');

    let newBook = new Book(title.value, author.value, pages.value);
    library.push(newBook);

    displayBooks();
}

function printAllBooks(library){
    library.map(book => console.log(`"${book.title}", is written by ${book.author} and has ${book.pages} pages`));
}

function searchFor(bookTitle){
    //if found, display book, else return "Search not found"
    //Reduce method might be helpful here
}

function displayBooks(){

    const bookList = document.getElementById('book-list');

    for(let i=0; i< library.length; i++){
        let div = document.createElement('div');
        div.classList.add('card');

        //create h3 element give textcontent of title
        let title = document.createElement('h3');
        title.textContent = `Title: ${library[i].title}`;
        div.appendChild(title);

        //create h4 element give text content of author append to div
        let author = document.createElement('h4');
        author.textContent = `Author: ${library[i].author}`;
        div.appendChild(author);

        //create h4 element give text content of numpages append to div
        let pageNum = document.createElement('h4');
        pageNum.textContent = `Pages: ${library[i].pages}`;
        div.appendChild(pageNum);

        bookList.appendChild(div);
    }
}

function openMenu(){
    let formEl = document.getElementById('form-el');
    let btn = document.getElementById('add-btn');
    formEl.style.display === "none" ? formEl.style.display = "flex" : formEl.style.display = "none";
   
    if(btn.textContent === "Add Book +"){
        btn.textContent = "Close Menu";
        btn.style.backgroundColor = "red";

    }else{
        btn.textContent = "Add Book +";
        btn.style.backgroundColor = "#eff8ff";
    }    
}

//form is initially invisible
let formEl = document.getElementById('form-el');
formEl.style.display = "none";

let bookList = document.getElementsByClassName("book-list");
let addBtn = document.getElementById("add-btn");
let submitBtn = document.getElementById('submit-btn');

addBtn.addEventListener("click", openMenu);
submitBtn.addEventListener('click', addToLibrary);

displayBooks();


//Get info from menu
//display user input
//add option to delete book from list