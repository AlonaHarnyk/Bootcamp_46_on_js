let books = [
  {
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
      и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
      персональных компьютеров в целом.
      В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
      сопровождающиеся большим количеством оригинальных студийных фотографий.
      Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
      Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },
  {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
      в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
      оставаясь в безопасности. 
      Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
      от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
      обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
      объясняются наглядно с помощью иллюстраций и схем.`,
  },
  {
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
      Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
      знаниями будете в течение всей карьеры.
      Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
      как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
      какими инструментами ему нужно пользоваться.`,
  },
];

if (!localStorage.getItem("books")) {
  localStorage.setItem("books", JSON.stringify(books));
}

const rootDiv = document.getElementById("root");

const leftDiv = document.createElement("div");
const rightDiv = document.createElement("div");

leftDiv.classList.add("left");
rightDiv.classList.add("right");

rootDiv.append(leftDiv, rightDiv);

const title = document.createElement("h1");
title.textContent = "LIBRARY";
const list = document.createElement("ul");
const addBtn = document.createElement("button");
addBtn.textContent = "Add book";

leftDiv.append(title, list, addBtn);

addBtn.addEventListener("click", addBook);

function renderList() {
  const books = JSON.parse(localStorage.getItem("books"));
  const markup = books
    .map(
      ({ title, id }) =>
        `<li id='${id}'><p class='title'>${title}</p><button class='edit'>Edit</button><button class='delete'>Delete</button></li>`
    )
    .join("");
  list.innerHTML = "";
  list.insertAdjacentHTML("afterbegin", markup);
  const titles = document.querySelectorAll(".title");
  titles.forEach((title) => title.addEventListener("click", renderPreview));
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((btn) => btn.addEventListener("click", deleteBook));
  const editBtns = document.querySelectorAll(".edit");
  editBtns.forEach((btn) => btn.addEventListener("click", editBook));
}
renderList();

function renderPreview({ target }) {
  const books = JSON.parse(localStorage.getItem("books"));
  const book = books.find(({ title }) => title === target.textContent);
  const markup = createPreviewMarkup(book);
  // rightDiv.innerHTML = ''
  // rightDiv.insertAdjacentHTML('beforeend', markup)
  rightDiv.innerHTML = markup;
}

function createPreviewMarkup({ title, author, img, plot }) {
  return `<div><h2>${title}</h2><p>${author}</p><img src='${img}' alt='title'><p>${plot}</p></div>`;
}

function deleteBook({ target }) {
  const books = JSON.parse(localStorage.getItem("books"));
  const bookId = target.closest("li").id;
  const filteredBooks = books.filter(({ id }) => id !== bookId);
  localStorage.setItem("books", JSON.stringify(filteredBooks));
  renderList();
}

function addBook() {
  const newBook = {
    id: `${Date.now()}`,
    title: "",
    author: "",
    img: "",
    plot: "",
  };
  const markup = createFormMarkup(newBook);
  rightDiv.innerHTML = markup;
  createBook(newBook);
  const form = document.querySelector("form");
  form.addEventListener("submit", submitHandler);
  function submitHandler(event) {
    event.preventDefault();
    const values = Object.values(newBook);
    if (values.some((value) => value === "")) {
      alert("Fill all inputs!");
      return;
    }
    const books = JSON.parse(localStorage.getItem("books"));
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    renderList();
    const markup = createPreviewMarkup(newBook);
    rightDiv.innerHTML = markup;
  }
}

function createFormMarkup({ title, author, img, plot }) {
  return `<form>
  <label>Title: <input type='text' name='title' value='${title}'></label>
  <label>Author: <input type='text' name='author' value='${author}'></label>
  <label>Image: <input type='url' name='img' value='${img}'></label>
  <label>Plot: <input type='text' name='plot' value='${plot}'></label>
  <button>Save</button>
  </form>`;
}

function createBook(book) {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => input.addEventListener("change", changeHandler));
  function changeHandler({ target: { name, value } }) {
    book[name] = value;
  }
}

function editBook({ target }) {
  const books = JSON.parse(localStorage.getItem("books"));
  const bookId = target.closest("li").id;
  const book = books.find(({ id }) => id === bookId);
  const markup = createFormMarkup(book);
  rightDiv.innerHTML = markup;
  createBook(book);
  const form = document.querySelector("form");
  form.addEventListener("submit", submitHandler);
  function submitHandler(event) {
    event.preventDefault();
    const books = JSON.parse(localStorage.getItem("books"));
    const index = books.findIndex(({ id }) => id === bookId);
    books[index] = book;
    localStorage.setItem("books", JSON.stringify(books));
    renderList();
    const markup = createPreviewMarkup(book);
    rightDiv.innerHTML = markup;
  }
}
