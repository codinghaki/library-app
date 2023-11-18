class Library {
    constructor(){
        this.books = [];
    }

    addBookToLibrary(book) {
        this.books.push(book);
    }
}

class Book {
    constructor(title, author, numPages, read){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }

    isReadYet() {
        if (this.read) {
            return 'read'
        } else {
            return 'not read yet'
        }
    }

    info() {
        return `${this.title}, ${this.author}, ${this.numPages} pages, ${this.isReadYet()}`;
    }
}