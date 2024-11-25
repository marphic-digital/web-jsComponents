const openModalBtnElement = document.querySelector("#openModal");
const modalEl = document.querySelector(".modal");
const modalContentEl = document.querySelector(".modal__content");

const z = openModalBtnElement.addEventListener("click", () => {
  modalEl.classList.add("open");
});

modalContentEl.addEventListener("click", () =>
  modalEl.classList.remove("open")
);
