const url = "https://anapioficeandfire.com/api/books/";

// document only availble in browser
const app = document.querySelector("#books");
app.style.paddingLeft = 0;

const addBookToDOM = (book) => {
  let element = document.createElement("div");
  let title = document.createElement("h4");
  let author = document.createElement("p");
  let published = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = `by ${book.authors[0]}`;
  published.textContent = book.released.substr(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  element.append(title);
  element.append(author);
  element.append(published);
  element.append(pages);

  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "20px";

  app.append(element);
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // loop through array w/ forEach
      data.forEach((item) => {
        addBookToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);
      let div = document.createElement("div");
      div.textContent = `An error occurred. Please try again.`;
      app.append(div);
    })
    .finally(() => {
      let loading = document.querySelector("#loading");
      app.removeChild(loading);
    });
};

fetchData(url);
