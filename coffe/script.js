let body = document.querySelector("body");
let closeButton = document.querySelector(".modal-inner button");
let modalWrapper = document.querySelector(".modal-wrapper");
let cards = document.querySelectorAll(".card");

function showModal() {
    modalWrapper.classList.remove("hide");
    body.classList.add("modalOpen");
}

function hideModal() {
    modalWrapper.classList.add("hide");
    body.classList.remove("modalOpen");
}

for (let i = 0; i < cards.length; i += 1) {
    cards[i].addEventListener("click", showModal);
}

closeButton.addEventListener("click", hideModal);