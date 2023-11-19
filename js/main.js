const modal = document.querySelector("#image-modal");
const modalCloseButton = document.querySelector("#image-modal .close-button");
const modalImage = document.querySelector("#modal-image");
const cards = document.querySelectorAll(".card");
const likebtn = document.getElementsByClassName(".like-btn");

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    let imgSrc = card.querySelector("img").src;
    modalImage.src = imgSrc.replace("/thumbnails/", "/img/");
    modal.classList.remove("hidden");
  });
});

function handleInput(value) {
  const autocompleteContainer = document.getElementById("autocomplete");
  autocompleteContainer.innerHTML = "";

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(value.toLowerCase())
  );
  filteredSuggestions.forEach((suggestion) => {
    const autocompleteItem = document.createElement("div");
    autocompleteItem.classList.add("autocomplete-item");
    autocompleteItem.textContent = suggestion;
    autocompleteItem.addEventListener("click", () => {
      document.querySelector('input[type="text"]').value = suggestion;
      autocompleteContainer.style.display = "none";
    });
    autocompleteContainer.appendChild(autocompleteItem);
  });
  autocompleteContainer.style.display =
    filteredSuggestions.length > 0 ? "block" : "none";
}

document.addEventListener("click", function (e) {
  const autocompleteContainer = document.getElementById("autocomplete");
  if (!autocompleteContainer.contains(e.target)) {
    autocompleteContainer.style.display = "none";
  }
});
const dropdown = document.querySelector(".dropdown");
const dropdownSelect = dropdown.querySelector(".dropdown-select");
const dropdownList = dropdown.querySelector(".dropdown-list");

dropdownSelect.addEventListener("click", function (e) {
  e.stopPropagation();

  dropdownList.style.display =
    dropdownList.style.display === "none" ? "block" : "none";
});

document.addEventListener("click", function () {
  dropdownList.style.display = "none";
});

const dropdownItems = dropdown.querySelectorAll(".dropdown-item");
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    dropdownSelect.value = this.textContent;
    dropdownList.style.display = "none";
  });
});

function toggleLike(button) {
  event.stopPropagation();
  button.classList.toggle("liked");
  button.classList.add("clicked");
  setTimeout(() => {
    button.classList.remove("clicked");
  }, 300);
}
