
function fetchBooks() { // this function should include a fetch request to the Game of Thrones API (https://anapioficeandfire.com/api/booksLinks to an external site.). 
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  //The returned response should be converted to JSON.
  .then(response => response.json())    //  always check the website console for errors you had .jsonn you needed .json
  .then(info =>{
      renderBooks(info);      //Then, it should call the second function, renderBooks()
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

//still moving too fast dont rush your work
//you uploaded the assingment without a single push or add 