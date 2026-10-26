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

Book.prototype.toggle = function(){
    if(this.read === 'Not Read'){
        this.read = 'Read'
        // myLibrary[0].read='Read'
        console.log('this was not read')
        // console.log(myLibrary[0].read)
    }
    else{
        this.read= 'Not Read'
        console.log('come into else clause')
    }
}

function addBookToLibrary(title, author, pages, read) {

    let book = new Book (title, author, pages, read);
    myLibrary.push(book);
}


addBookToLibrary("hamlet","shakespeare",290,'Not Read')
// console.log(myLibrary)

addBookToLibrary("Ramayan","valmiki",390,'Read')

addBookToLibrary('Physics','R D Sharma',490,'Not Read')


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
        // console.log(id,title,author,pages,status)

        let card = document.createElement('div')
        card.classList.add('card');
        card.setAttribute('data-bookid', id)

        booklist.appendChild(card);

        infoToPage(title,card, 'Title: ');

        infoToPage(author,card,'Author: ');

        infoToPage(pages,card,'Pages: ');
        
        infoToPage(status,card,'Status: ');

        removeBookFromPage(card,id);

        readStatusToggle(card)
    }
}

addBookToPage()

console.log(myLibrary)

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

        if(checkbox.checked){
            addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, 'Read');
        }
        else{
            addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, 'Not Read');
        }

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
        console.log(myLibrary);
        addBookToPage();

    }
    else if(event.target.classList.contains('read-status')){
        console.log('clicked read')
        console.log(event.target)
        console.log(event.target.parentElement.dataset.bookid)
        const id = event.target.parentElement.dataset.bookid;
        const index = myLibrary.findIndex( (book) => book.id === id);

        console.log(myLibrary[index].toggle())  
        // myLibrary[index].toggle()
        // console.log(myLibrary.title)
        // event.target.toggle();
        addBookToPage()
    }
}
)

