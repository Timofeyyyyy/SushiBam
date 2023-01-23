window.addEventListener("click", function (event) {
  if (event.target.dataset.action === "open") {
    const cardContent = event.target.closest(".card-content");

    const hiddenCard = cardContent.querySelector(".card-hidden");

    hiddenCard.classList.toggle("new");
  }
});
