const myLibrary = [];

class Book {
  constructor(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }

  isReadYet() {
    if (this.read) {
      return "read";
    } else {
      return "not read yet";
    }
  }

  info() {
    return `${this.title}, ${this.author}, ${
      this.numPages
    } pages, ${this.isReadYet()}`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book3 = new Book("1984", "George Orwell", 328, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function createTableCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  return cell;
}

function addBookRow(book, table) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.numPages}</td>
    `;
  table.appendChild(newRow);
}

function displayBooks() {
  const table = document.querySelector(".bookList");
  myLibrary.forEach((book) => {
    addBookRow(book, table);
  });
}

displayBooks();
