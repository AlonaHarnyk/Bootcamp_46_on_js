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
}
renderList();

function renderPreview({ target }) {
  console.log(target.textContent);
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
  const bookId = target.closest("li").id;
  const filteredBooks = books.filter(({ id }) => id !== bookId);
  books = filteredBooks;
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
  const markup = createFormMarkup();
  rightDiv.innerHTML = markup;
}

function createFormMarkup() {
  return `<form>
  <label>Title: <input type='text'></label>
  <label>Author: <input type='text'></label>
  <label>Image: <input type='url'></label>
  <label>Plot: <input type='text'></label>
  <button>Save</button>
  </form>`;
}
