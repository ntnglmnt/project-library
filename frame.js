// const myLibrary = [];
// let theHobbit = new Book('The Hobbit', 'JJR Tolkien', '295', 'read');
// let invincible = new Book('INVINCIBLE', 'Mark Nolan', '359', 'not read');
// let jjk = new Book('Jujutsu Kaisen', 'Hito Nakamura', '209', 'read');

// const display = document.createElement('div')
// display.classList.add('display')
// document.body.appendChild(display);

// const displayBtn = document.createElement('button')
// displayBtn.classList.add('displayBtn')
// displayBtn.textContent = 'Display'
// displayBtn.addEventListener('click', displayBooks)
// display.appendChild(displayBtn)

// const titleInput = document.getElementById('titleInput')

// const authorInput = document.getElementById('authorInput')

// const pagesInput = document.getElementById('pagesInput')

// const readInput = document.getElementById('readInput')

// function Book(title, author, pages, read, id) {
//     // the constructor
//     this.title = title;
//     this.author = ' by ' + author;
//     this.pages = ',' + pages + ' pages ';
//     this.read = '' + read;
//     this.id = crypto.randomUUID();
//     this.showBook = function () {
//         return this.title + this.author + this.pages + this.read
//     }

// };

// function storeToLibrary(title, author, pages, read) {

//     title = titleInput.value
//     author = authorInput.value
//     pages = pagesInput.value
//     read = readInput.value

//     let newBook = new Book(title, author, pages, read)
//     console.log(newBook)
//     myLibrary.push(newBook)

// };


// function displayBooks() {
//     myLibrary.forEach((book) => {
//         let bookSpace = document.createElement('div')
//         bookSpace.innerText = book.showBook()
//         display.appendChild(bookSpace)
//         let removeBookSpace = document.createElement('button')
//         removeBookSpace.classList.add('removeBookSpaceBtn')
//         removeBookSpace.textContent = 'Remove'
//         removeBookSpace.addEventListener('click', () => {
//             bookSpace.innerText = ''
//             display.removeChild(removeBookSpace)
//         })
//         bookSpace.appendChild(removeBookSpace)
//         let toggleRead = document.createElement('button')
//         toggleRead.classList.add('checkBtn')
//         toggleRead.textContent = 'Read'
//         toggleRead.addEventListener('click', () => {
//             book.read = 'read'
//             bookSpace.innerText = book.showBook()
//             bookSpace.appendChild(removeBookSpace)
//             bookSpace.appendChild(toggleRead)
//             bookSpace.appendChild(toggleNotRead)
//         })
//         bookSpace.appendChild(toggleRead)
//         let toggleNotRead = document.createElement('button')
//         toggleNotRead.classList.add('checkBtn')
//         toggleNotRead.textContent = 'not read'
//         toggleNotRead.addEventListener('click', () => {
//             book.read = 'Not read'
//             console.log(book)
//             bookSpace.innerText = book.showBook()
//             bookSpace.appendChild(removeBookSpace)
//             bookSpace.appendChild(toggleRead)
//             bookSpace.appendChild(toggleNotRead)
//         })
//         bookSpace.appendChild(toggleNotRead)
//     })
// }


// const add = document.createElement('button')
// add.textContent = 'Add'
// add.addEventListener('click', storeToLibrary)
// document.body.appendChild(add)

const library = {

    mylibrary: [],

    storeToLibrary: function (title, author, pages, read) {

        title = titleInput.value
        author = authorInput.value
        pages = pagesInput.value
        read = readInput.value

        let newBook = new Book(title, author, pages, read)
        console.log(newBook)
        library.mylibrary.push(newBook)
        console.log(library.mylibrary)
    },

    initializeLibrary: function () {

        let lib = library.mylibrary

        function bookDisplay(arr) {

            arr.forEach((item) => {

                let bookSpace = document.createElement('div')
                console.log(bookSpace)
                let content = item.value
                bookSpace.innerHTML = content
                display.appendChild(bookSpace)

                let removeBookSpace = document.createElement('button')
                removeBookSpace.classList.add('removeBookSpaceBtn')
                removeBookSpace.textContent = 'Remove'
                removeBookSpace.addEventListener('click', () => {
                    bookSpace.innerText = ''
                    displayBox.removeChild(removeBookSpace)
                })
                bookSpace.appendChild(removeBookSpace)

                let toggleRead = document.createElement('button')
                toggleRead.classList.add('checkBtn')
                toggleRead.textContent = 'Read'
                toggleRead.addEventListener('click', () => {
                    book.read = 'read'
                    bookSpace.innerText = book.showBook()
                    bookSpace.appendChild(removeBookSpace)
                    bookSpace.appendChild(toggleRead)
                    bookSpace.appendChild(toggleNotRead)
                })
                bookSpace.appendChild(toggleRead)
                let toggleNotRead = document.createElement('button')
                toggleNotRead.classList.add('checkBtn')
                toggleNotRead.textContent = 'not read'
                toggleNotRead.addEventListener('click', () => {
                    book.read = 'Not read'
                    console.log(book)
                    bookSpace.innerText = book.showBook()
                    bookSpace.appendChild(removeBookSpace)
                    bookSpace.appendChild(toggleRead)
                    bookSpace.appendChild(toggleNotRead)
                })
                bookSpace.appendChild(toggleNotRead)
            })
        }

        const display = document.createElement('div')
        display.classList.add('display')
        document.body.appendChild(display);

        const displayBtn = document.createElement('button')
        displayBtn.classList.add('displayBtn')
        displayBtn.textContent = 'Display'
        displayBtn.addEventListener('click', bookDisplay(lib))
        display.appendChild(displayBtn)

        const titleInput = document.getElementById('titleInput')
        const authorInput = document.getElementById('authorInput')
        const pagesInput = document.getElementById('pagesInput')
        const readInput = document.getElementById('readInput')

        const add = document.createElement('button')
        add.textContent = 'Add'
        add.addEventListener('click', library.storeToLibrary)
        document.body.appendChild(add)
    }
}

class Book {

    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = ' by ' + author;
        this.pages = ',' + pages + ' pages ';
        this.read = '' + read;
        this.id = crypto.randomUUID();
    };

    showBook() {
        return this.title + this.author + this.pages + this.read
    };
};


let initiateLibrary = library.initializeLibrary
initiateLibrary()
