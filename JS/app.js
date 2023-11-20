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
      <td>${book.isReadYet()}</td>
      <td></td>
      <td></td>
      <td></td>
    `;
  table.appendChild(newRow);
}


function displayBooks() {
  const table = document.querySelector('.bookList');
  const tbody = table.querySelector('tbody');

  // Clear existing content in the tbody
  tbody.innerHTML = '';

  // Render the books in the table
  myLibrary.forEach((book) => {
    addBookRow(book, tbody);
  });
}



document.querySelector('.addBookForm form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('input[name="read"]:checked').value === '1';

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  // Clear the form fields after adding a book
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('input[name="read"]:checked').checked = false;

  // Display the updated list of books
  displayBooks();
});


// Create a book instance
const exampleBook = new Book("The Example Book", "John Doe", 200, true);
// Add the book to the library
addBookToLibrary(exampleBook);
// Display the updated list of books
displayBooks();




