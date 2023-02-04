let fon = document.querySelector(".basket-fon");
let close = document.querySelector(".basket-close-block");
let basket = document.querySelector(".basket");

basket.addEventListener("click", function () {
  fon.classList.toggle("active");
});
close.addEventListener("click", function () {
  fon.classList.remove("active");
});
