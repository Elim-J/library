/**
 * Details: User may add or delete books from a library
 */
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

/**
 * Take user input from menu and add it to library
 */
function addToLibrary(){
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');

    let newBook = new Book(title.value, author.value, pages.value);
    library.push(newBook);

    createBookCard(newBook.title, newBook.author, newBook.pages);
}

/**
 * 
 * @param {array} library
 * logs all objects to console 
 */
function printAllBooks(library){
    library.map(book => console.log(`"${book.title}", is written by ${book.author} and has ${book.pages} pages`));
}

/**
 * 
 * @param {object} bookTitle 
 * @returns index of location in library array or -1 if not found
 */
function searchFor(bookTitle){
    //return book if found or -1 if not found
    for(let i=0; i< library.length; i++){
        if(library[i].title === bookTitle){
            return i;
        }
    }
    return -1;
}

/**
 * 
 * @param {string} title 
 * @param {string} author 
 * @param {number} pages 
 * 
 * Create card to display and display it
 */
function createBookCard(title, author, pages){
    const bookList = document.getElementById('book-list');
    let div = document.createElement('div');
        div.classList.add('card');

        let titleEl = document.createElement('h3');
        titleEl.textContent = `Title: ${title}`;
        div.appendChild(titleEl);

        let authorEl = document.createElement('h3');
        authorEl.textContent = `Author: ${author}`;
        div.appendChild(authorEl);

        let pageNumEl = document.createElement('h3');
        pageNumEl.textContent = `Pages: ${pages}`;
        div.appendChild(pageNumEl);

        let btnEl = document.createElement('button');
        btnEl.classList.add("delete-btn");
        btnEl.textContent = 'Delete Book';
        btnEl.style.backgroundColor = "#1eb8a9";
        btnEl.style.color = "white";
        btnEl.addEventListener('click', deleteBook);
        div.appendChild(btnEl);

        bookList.appendChild(div);
}

/**
 * Render entire library
 */
function displayLibrary(){
    let bookList = document.getElementById('book-list');
    for(let i=0; i<library.length; i++){
        createBookCard(library[i].title, library[i].author, library[i].pages);
    }
}

/**
 * Open or Close menu
 */
function openMenu(){
    let formEl = document.getElementById('form-el');
    let btn = document.getElementById('add-btn');
    formEl.style.display === "none" ? formEl.style.display = "flex" : formEl.style.display = "none";
   
    if(btn.textContent === "Add Book +"){
        btn.textContent = "Close Menu";
        btn.style.backgroundColor = "red";

    }else{
        btn.textContent = "Add Book +";
        btn.style.backgroundColor = "rgb(110, 157, 198)";
    }    
}

/**
 * 
 * @param {mouse event} e 
 * Delete book on click
 */
function deleteBook(e){
    //Use event from button click to remove card associated with it
    e.path[2].removeChild(e.path[1]);
}

//form is initially invisible
let formEl = document.getElementById('form-el');
formEl.style.display = "none";

let bookList = document.getElementsByClassName("book-list");
let addBtn = document.getElementById("add-btn");
let submitBtn = document.getElementById('submit-btn');


addBtn.addEventListener("click", openMenu);
submitBtn.addEventListener('click', addToLibrary);
let deleteBtn = document.querySelector('delete-btn');

displayLibrary();
