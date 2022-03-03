//#################### library specific JavaScript ################################
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

//#################### Pop-Up JavaScript ################################ DOES NOT WORK
const openPopUpButton = document.querySelectorAll('[data-form-target]')
const closePopUpButton = document.querySelectorAll('[data-close-btn]')
const overlay = document.getElementsById('#overlay')

//actions
openPopUpButton.forEach(button => {
    button.addEventListener('click', () => {
        const popUp = document.getElementsByClassName(".pop-up")
        openPopUp(popUp)
    })
})

closePopUpButton.forEach(button => {
    button.addEventListener('click', () => {
        const popUp = document.getElementsByClassName('.pop-up')
        closePopUp(popUp)
    })
})

// change class of popUp and overlay to active to engage css
function openPopUp(popUp){
    if(popUp === null) return
    popUp.classList.add('active')
    overlay.classList.add('active')
}

// change class of popUp and overlay from active to engage css

function closePopUp(popUp){
    if(popUp === null) return
    popUp.classList.remove('active')
    overlay.classList.remove('active')
}