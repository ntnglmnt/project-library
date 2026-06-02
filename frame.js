const myLibrary = [];

function Book(arr) {
    // the constructor

    this.title = arr[0];
    this.author = arr[1];
    this.pages = arr[2];
    this.read = arr[3];
    this.id = crypto.randomUUID();
};

function storeToLibrary(title, author, pages, read, array) {
    // take params, create a book and then store it in the array
    
};