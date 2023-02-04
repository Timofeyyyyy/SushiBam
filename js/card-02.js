const cardWrapper = document.querySelector(".basket-cards");

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-card")) {
    const card = event.target.closest(".card");

    const poductInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".card-img").getAttribute("src"),
      title: card.querySelector(".card-title").innerText,
      weight: card.querySelector(".weight").innerText,
      prise: card.querySelector(".p-card").innerText,
    };

    const itemInCard = cardWrapper.querySelector(
      `[data-id="${poductInfo.id}"]`
    );
    if (itemInCard) {
    }

    const cardItemHTML = `             
    <div class="basket-card"  data-id="${poductInfo.id}">
    <div class="card">
      <div class="upper-card">
        <div class="card-img-block">
          <img src="${poductInfo.imgSrc}" alt="" class="cake card-img" />
        </div>
      </div>
      <div class="card-content">
        <div class="centre">
          <h3 class="card-title">${poductInfo.title}</h3>
        </div>
        <div class="card-info">
        <div class="prise"> ${poductInfo.prise}</div>  
          <p class="p-card">${poductInfo.weight}</p>
      
        </div>
        <div class="centre">
          <div class="counter-block">
            <div data-action="minus" class="counter">-</div>
            <div data-counter class="counter">1</div>
            <div data-action="plus" class="counter">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

    cardWrapper.insertAdjacentHTML("beforeend", cardItemHTML);
  }
  calkPrice();
});
