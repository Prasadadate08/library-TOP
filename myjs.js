const myLibrary = [];

function Book (title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read
	this.info = function(){
	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
	}
}


function addBookToLibrary(title, author, pages, read) {

    let book = new Book (title, author, pages, read);
    myLibrary.push(book);
}


// addBookToLibrary("hamlet","shakespeare",290,'Not read')
// // console.log(myLibrary)

// addBookToLibrary("Ramayan","valmiki",390,'Read')

// addBookToLibrary('Physics','R D Sharma',490,'not read')


let container = document.querySelector('.container')
let booklist = document.querySelector('.books.list')

function infoToPage(value,card,label) {
    let para = document.createElement('p');
    let span = document.createElement('span')
    let span2 = document.createElement('span')
    span.textContent = label
    span2.textContent = value
    card.appendChild(para)
    para.appendChild(span)
    para.appendChild(span2)
}

function addBookToPage() {
    let id, title, author, pages, status;
    booklist.textContent=''

    for(let book of myLibrary){
        ({id,title,author,pages, read:status} = book);
        // console.log(id,title,author,pages,status)

        let card = document.createElement('div')
        card.classList.add('card')
        booklist.appendChild(card)

        infoToPage(title,card, 'Title: ')

        infoToPage(author,card,'Author: ')

        infoToPage(pages,card,'Pages: ')
        
        infoToPage(status,card,'Status: ')
    }
}

// addBookToPage()

// addBookToLibrary('Bond','James bond', 190,'not read')
console.log(myLibrary)

// addBookToPage()


let checkbox = document.querySelector("input[name='status']")
let addBook = document.querySelector("button[class='addBook']")
let bookTitle = document.querySelector("input[name='title']")
let bookAuthor = document.querySelector("input[name='author']")
let bookPages = document.querySelector("input[name='pages']")
const dialog = document.querySelector("dialog");
const form = document.querySelector("form")

// console.log(checkbox)
// console.log(checkbox.checked)
// console.log(addBook)
// console.log(bookTitle)
// console.log(bookPages)

// console.log(formDetails.querySelectorAll('input.value'))
// console.log(form.checkValidity())
// console.log(form.reportValidity())

addBook.addEventListener('click', (event) => {
    if(!form.checkValidity()){
        // alert('Please fill details')
        // form.reportValidity();
    }
    else{
        event.preventDefault()
        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, checkbox.checked)
        // addBookToLibrary('vande bharat','Modi',20,false)
        dialog.close()
        addBookToPage()
        bookTitle.value=''
        bookAuthor.value=''
        bookPages.value=''
        checkbox.checked=false
    }
}
)