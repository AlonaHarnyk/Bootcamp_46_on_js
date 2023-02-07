const list = document.querySelector(".list");
const form = document.querySelector("form");
const button = document.querySelector(".more");

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

let pageToFetch = 0;
let queryToFetch = "";

function fetchEvents(keyword, page) {
  const params = new URLSearchParams({
    apikey: API,
    size: 200,
    keyword,
    page,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch((error) => console.log(error));
}

function getEvents(query, page) {
  fetchEvents(query, page).then((data) => {
    console.log(data);
    if (data.page.totalElements === 0) {
      alert(`There are no events by keyword ${query}`);
      return;
    }

    const events = data._embedded.events;
    renderEvents(events);
    pageToFetch += 1;
    if (data.page.totalPages > 1 && pageToFetch !== data.page.totalPages) {
      button.classList.remove("unvisible");
    }
  });
}

function renderEvents(events) {
  const markup = events
    .map(({ name, images }) => {
      return `<li><h2>${name}</h2><img src=${images[0].url} alt='${name}' width='370'></li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements.query.value;
  if (!inputValue || queryToFetch === inputValue) {
    return;
  }

  queryToFetch = inputValue;
  pageToFetch = 0;
  list.innerHTML = "";
  button.classList.add("unvisible");
  getEvents(queryToFetch, pageToFetch);
  form.reset();
}

button.addEventListener("click", () => {
  button.classList.add("unvisible");
  getEvents(queryToFetch, pageToFetch);
});
