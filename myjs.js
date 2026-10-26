const myLibrary = [];

function Book (title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read
}

function addBookToLibrary(title, author, pages, read) {

    let book = new Book (title, author, pages, read);
    myLibrary.push(book);
}

const container = document.querySelector('.container');
const booklist = document.querySelector('.books.list');

function infoToPage(value,card,label) {
    let para = document.createElement('p');
    let span = document.createElement('span');
    let span2 = document.createElement('span');

    span.textContent = label;
    span2.textContent = value;
    card.appendChild(para);
    para.appendChild(span);
    para.appendChild(span2);

}

function removeBookFromPage(card,id){
    let removeButton = document.createElement('button');
    removeButton.classList.add('remove-book');
    removeButton.textContent='Remove Book';
    card.appendChild(removeButton);
    removeButton.setAttribute('data-bookid',id)
}

function readStatusToggle(card){
    let readToggle = document.createElement('button');
    readToggle.classList.add('read-status');
    readToggle.textContent='Read Status'
    card.appendChild(readToggle)
}


function addBookToPage() {
    let id, title, author, pages, status;
    booklist.textContent=''

    for(let book of myLibrary){
        ({id,title,author,pages, read:status} = book);

        let card = document.createElement('div')
        card.classList.add('card');
        card.setAttribute('data-bookid', id)

        booklist.appendChild(card);

        infoToPage(title,card, 'Title: ');

        infoToPage(author,card,'Author: ');

        infoToPage(pages,card,'Pages: ');
        
        infoToPage(status ? 'Read' : 'Not Read',card,'Status: ');

        removeBookFromPage(card,id);

        readStatusToggle(card)
    }
}

addBookToLibrary("MRUTYUNJAY","Shivaji Sawant",757,true)

addBookToLibrary("Vyakti Aani Valli","P.L. Deshpande",202,false)

addBookToLibrary('Natsamrat','V.V. Shirwadkar (Kusumagraj)',111,false)

addBookToPage() // Default book on page

const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
let checkbox = document.querySelector("input[name='status']");
let addBook = document.querySelector("button[class='addBook']");
let bookTitle = document.querySelector("input[name='title']");
let bookAuthor = document.querySelector("input[name='author']");
let bookPages = document.querySelector("input[name='pages']");


addBook.addEventListener('click', (event) => {
    if(!form.checkValidity()){
    }
    else{
        event.preventDefault();

        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, checkbox.checked);

        dialog.close();
        addBookToPage();
        bookTitle.value='';
        bookAuthor.value='';
        bookPages.value='';
        checkbox.checked=false;
    }
}
)

booklist.addEventListener("click", (event) =>{

    if(event.target.classList.contains('remove-book')){
        const id = event.target.dataset.bookid;
        const index = myLibrary.findIndex( (book) => book.id === id);
 
        myLibrary.splice(index,1);
        addBookToPage();

    }
    else if(event.target.classList.contains('read-status')){
        
        const id = event.target.closest('.card').dataset.bookid;
        const index = myLibrary.findIndex( (book) => book.id === id);

        myLibrary[index].toggleRead()

        addBookToPage()
    }
}
)

