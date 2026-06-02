const myLibrary = [];
let theHobbit = new Book('The Hobbit', 'JJR Tolkien', '295', 'read');
let invincible = new Book('INVINCIBLE', 'Mark Nolan', '359', 'not read');
let jjk = new Book('Jujutsu Kaisen', 'Hito Nakamura', '209', 'read')

const titleInput = document.getElementById('titleInput')

const authorInput = document.getElementById('authorInput')

const pagesInput = document.getElementById('pagesInput')

const readInput = document.getElementById('readInput')

function Book(title, author, pages, read, id) {
    // the constructor
    this.title = title;
    this.author = 'by ' + author;
    this.pages = pages + ' pages';
    this.read = read;
    this.id = crypto.randomUUID();
};

function storeToLibrary(title, author, pages, read) {

    title = titleInput.value
    author = authorInput.value
    pages = pagesInput.value
    read = readInput.value

    let newBook = new Book(title, author, pages, read)
    console.log(newBook)
    myLibrary.push(newBook)

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
add.addEventListener('click', storeToLibrary)
document.body.appendChild(add)

