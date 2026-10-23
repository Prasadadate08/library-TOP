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


addBookToLibrary("hamlet","shakespeare",290,'Not read')
// console.log(myLibrary)

addBookToLibrary("Ramayan","valmiki",390,'Read')

addBookToLibrary('Physics','R D Sharma',490,'not read')


let container = document.querySelector('.container')
let booklist = document.querySelector('.books.list')


function addBookToPage() {
    let id, title, author, pages, status;
    booklist.textContent=''

    for(let book of myLibrary){
        ({id,title,author,pages, read:status} = book);
        // console.log(id,title,author,pages,status)

        let card = document.createElement('div')
        card.classList.add('card')
        booklist.appendChild(card)

        let para = document.createElement('p');
        let span = document.createElement('span')
        let span2 = document.createElement('span')
        span.textContent = 'Title: '
        span2.textContent = title
        card.appendChild(para)
        para.appendChild(span)
        para.appendChild(span2)

        let para2 = document.createElement('p');
        para2.textContent=author
        card.appendChild(para2)

        let para3 = document.createElement('p');
        para3.textContent=pages
        card.appendChild(para3)

        let para4 = document.createElement('p');
        para4.textContent=status
        card.appendChild(para4)
    }
}

addBookToPage()

addBookToLibrary('Bond','James bond', 190,'not read')
// console.log(myLibrary)

addBookToPage()
