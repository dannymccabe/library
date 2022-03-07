//book class: represents a book
class Book{
    constructor(title, author, isbn){
        this.title=title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class: handle UI tasks
class UI{
    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book){
            UI.addBookToList(book);
        })
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btm-sm delete">&times;</td>
        `;

        list.appendChild(row);
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }

    static clearFields(){
        document.querySelector('#title').value= '';
        document.querySelector('#author').value= '';
        document.querySelector('#isbn').value= '';
    }
}

//store class: handles storage
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books')=== null){
            books = [];
        } else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }
    
    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) =>{
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//events: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// event: add a book
document.querySelector('#book-form').addEventListener('submit', (e)=>{

    //prevent actual submit
    e.preventDefault();

    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // instantiate book
    const book = new Book(title, author, isbn);

    //add book to UI
    UI.addBookToList(book);

    //add book to store
    Store.addBook(book);

    //clear fields
    UI.clearFields();

});

// event: remove a book
document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.deleteBook(e.target)
})
