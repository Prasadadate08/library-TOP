# library-TOP

A simple library app built with HTML, CSS and JavaScript. You can add books through a form, see them as cards, mark them as read or not read, and remove them.

## Features

* Add a book (title, author, pages, read status) through a "New Book" button that opens a modal form built with the `<dialog>` element.
* Form fields are required, so incomplete books can't be added.
* Each book is shown as a card, with a coloured accent bar showing whether it's read or not.
* Toggle a book's read status with a button on its card.
* Remove a book with a button on its card.
* A few books are added by default so the page isn't empty on first load.

## How it works

* Books are created with a `Book` constructor and stored in an array. Each book gets a unique `id` from `crypto.randomUUID()`.
* The page is always redrawn from the array, so the array is the source of truth and the display is just a view of it.
* Each card and its remove button carry the book's `id` in a `data-` attribute, which is how a click is matched to the right book in the array.
* Button clicks are handled with event delegation on the book list, since the cards are created dynamically.
* The read toggle is a method on `Book.prototype`. Read status is stored as true/false and converted to "Read" / "Not Read" only when displayed.

## Technologies

* HTML
* CSS
* JavaScript

## Notes

This project is part of the Odin Project curriculum. The hardest part was understanding why removing a card from the page isn't the same as removing the book from the data, and how the array and the display should stay separate. I also learned about how prototype methods are shared between objects.

Books are not saved, so they reset when the page is reloaded.