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
    }
];

function Book(title, author, numPages){
    this.title = title;
    this.author = author;
    this.pages = numPages;
}

function addToLibrary(book){
    library.push(book);
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
        title.textContent = library[i].title;
        div.appendChild(title);

        //create h4 element give text content of author append to div
        let author = document.createElement('h4');
        author.textContent = library[i].author;
        div.appendChild(author);

        //create h4 element give text content of numpages append to div
        let pageNum = document.createElement('h4');
        pageNum.textContent = library[i].pages;
        div.appendChild(pageNum);

        bookList.appendChild(div);
    }

    
   
}

function openMenu(){
    //open a form that takes book title, author name,

    const menu = document.createElement("form");
    menu.classList.add("menu");
    //append inputs to menu
    //append menu to div

}

let bookList = document.getElementsByClassName("book-list");
let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", openMenu);

let anotherBook = new Book("The WildWildWest", "Elim", 234);
addToLibrary(anotherBook);
printAllBooks(library);
displayBooks();
// TODO create menu when "Add Book +" is clicked
// Add option to delete book