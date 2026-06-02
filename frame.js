function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the new operator to call the constructor")
    }
    this.title = title;
    this.author = 'by ' + author;
    this.pages = pages +' pages';
    this.read = read;
    this.info = function () {
        console.log(this.title, this.author, this.pages, this.read)
    }
}

bookOne = new Book('The Hobbit', 'J.J.R Tolkien', '295', 'aready read');

bookOne.info()