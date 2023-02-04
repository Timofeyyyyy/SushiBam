window.addEventListener("click", function (event) {
  const elips = document.querySelector(".elips-basket");
  const btn = this.document.querySelector(".basket-card-img");

  btn.addEventListener("click", function () {
    elips.classList.toggle("active");
  });
});
