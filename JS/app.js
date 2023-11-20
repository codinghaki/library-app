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

  toggleReadStatus() {
    this.read = !this.read;
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

function addBookRow(book, table, index) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.numPages}</td>
      <td>${book.isReadYet()}</td>
      <td><button class="toggleReadButton" data-index="${index}">Toggle Read Status</button></td>
      <td><button class="removeBookButton" data-index="${index}">Remove</button></td>
    `;
  table.appendChild(newRow);
}


function displayBooks() {
  const table = document.querySelector('.bookList');
  const tbody = table.querySelector('tbody');

  // Clear existing content in the tbody
  tbody.innerHTML = '';

  // Render the books in the table
  myLibrary.forEach((book, index) => {
    addBookRow(book, tbody, index);
  });

  // Add event listeners to the "Toggle Read Status" buttons
  const toggleButtons = document.querySelectorAll('.toggleReadButton');
  toggleButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const indexToToggle = e.target.dataset.index;
      myLibrary[indexToToggle].toggleReadStatus();
      displayBooks(); // Update the display after toggling read status
    });
  });

  // Add event listeners to the "Remove" buttons
  const removeButtons = document.querySelectorAll('.removeBookButton');
  removeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const indexToRemove = e.target.dataset.index;
      removeBook(indexToRemove);
      displayBooks(); // Update the display after removing a book
    });
  });
}


function removeBook(index) {
  myLibrary.splice(index, 1);
}

document.querySelector(".addBookForm form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read =
    document.querySelector('input[name="read"]:checked').value === "1";

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  // Clear the form fields after adding a book
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector('input[name="read"]:checked').checked = false;

  // Display the updated list of books
  displayBooks();
});



const exampleBook = new Book("The Example Book", "John Doe", 200, true);
addBookToLibrary(exampleBook);
displayBooks();
