const myLibrary = [];
let theHobbit = new Book('The Hobbit', 'JJR Tolkien', '295', 'read');
let invincible = new Book('INVINCIBLE', 'Mark Nolan', '359', 'not read');
let jjk = new Book('Jujutsu Kaisen', 'Hito Nakamura', '209', 'read')


function Book(title, author, pages, read, id) {
    // the constructor
    this.title = title;
    this.author = 'by ' + author;
    this.pages = pages + ' pages';
    this.read = read;
    this.id = crypto.randomUUID();
};

function storeToLibrary(book, arr) {

    arr.push(book)

};

storeToLibrary(theHobbit, myLibrary)
storeToLibrary(invincible, myLibrary)
storeToLibrary(jjk, myLibrary)

console.log(myLibrary)

function displayBooks () {
    myLibrary.forEach(book =>  {
        console.log(book)
    })
}

displayBooks(myLibrary)

const add = document.createElement('button')
add.textContent = 'Add'
document.body.appendChild(add)