const list = document.querySelector("ul");
const modalText = document.querySelector(".modal-text");
const button = document.querySelector("button");
const backdrop = document.querySelector(".backdrop");

list.addEventListener("click", openModal);

function openModal({ target }) {
  let content;
  if (target.nodeName === "P") {
    content = target.textContent;
  } else if (target.nodeName === "LI") {
    content = target.firstElementChild.textContent;
  } else {
    return;
  }

  modalText.textContent = content;
  backdrop.classList.add("open");

  window.addEventListener("keydown", closeByEsc);
}

button.addEventListener("click", closeModal);
backdrop.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});

function closeModal() {
  modalText.textContent = "";
  backdrop.classList.remove("open");
  window.removeEventListener("keydown", closeByEsc);
}

function closeByEsc({ code }) {
  if (code === "Escape") {
    closeModal();
  }
}
