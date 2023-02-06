const list = document.querySelector(".list");

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

function fetchEvents(keyword) {
  const params = new URLSearchParams({
    apikey: API,
    size: 20,
    keyword,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    // .catch((error) => console.log(error));
}

function getEvents(query) {
  fetchEvents(query).then((data) => {
    const events = data._embedded.events;
    renderEvents(events)
  }).catch((error) => console.log(error));
}

getEvents("cat");

function renderEvents(events) {
  const markup = events
    .map(({ name, images }) => {
      return `<li><h2>${name}</h2><img src=${images[0].url} alt='${name}' width='200'></li>`;
    })
    .join("");
    list.insertAdjacentHTML('beforeend', markup)
}
