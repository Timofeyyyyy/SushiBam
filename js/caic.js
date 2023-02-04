function calkPrice() {
  const card = document.querySelectorAll(".basket-card");
  const total = document.querySelector(".tottal-prise");

  let totalPrise = 0;

  card.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priseEl = item.querySelector(".prise");

    const currentPrise =
      parseInt(amountEl.innerText) * parseInt(priseEl.innerText);
    totalPrise += currentPrise;
  });

  total.innerText = totalPrise;
}
