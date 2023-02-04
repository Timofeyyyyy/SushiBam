window.addEventListener("click", function (event) {
  const cunterBlock = event.target.closest(".counter-block");
  const basketElips = document.querySelector(".elips-basket");
  const btnCounter = cunterBlock.querySelector("[data-counter]");
  const basketBtn = this.document.querySelector(".basket-card-img");

  // plus
  if (event.target.dataset.action === "plus") {
    btnCounter.innerText = ++btnCounter.innerText;
  }

  //   minus
  if (event.target.dataset.action === "minus") {
    if (parseInt(btnCounter.innerText) > 1) {
      btnCounter.innerText = --btnCounter.innerText;
    } else if (
      event.target.closest(".basket-cards") &&
      parseInt(btnCounter.innerText) === 1
    ) {
      event.target.closest(".basket-card").remove();
    }
  }
});
