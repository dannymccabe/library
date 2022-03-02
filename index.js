// Book constructor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

// New book
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");

// Store books as objects in an array
let myLibrary = [];

// Accept user input and store
function addBookToLibrary(){
    
}
