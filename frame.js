const myLibrary = [];

function Book(title, author, pages, read, id) {
    // the constructor
    this.title = title;
    this.author = 'by ' + author;
    this.pages = pages + ' pages';
    this.read = read;
    this.id = crypto.randomUUID();
};

let theHobbit = new Book('The Hobbit', 'JJR Tolkien', '295', 'read');

function storeToLibrary(book, arr) {

    arr.push(book)
    
};


storeToLibrary(theHobbit, myLibrary)
console.log(myLibrary)