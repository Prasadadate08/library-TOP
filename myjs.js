// console.log('Hello world')


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


// const book1 = new Book("Hamlet","Shakespeare",290,"not read")

// console.log(book1)

// console.log(book1.info())

console.log(myLibrary)

addBookToLibrary("hamlet","shakespeare",290,'Not read')
console.log(myLibrary)

addBookToLibrary("Ramayan","valmiki",390,'Read')

addBookToLibrary('Physics','R D Sharma',490,'not read')

for(let index in myLibrary){
    console.log(index,myLibrary[index])
}

