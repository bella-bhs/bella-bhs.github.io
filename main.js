document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".previous");
  const challengeScreen = document.getElementById("challenge-screen");
  const cardContainer = document.querySelector(".card-container");
  const navButtons = document.querySelector(".nav-buttons");

  let currentCard = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none";
    });
  }

  showCard(currentCard);

  cards.forEach(card => {
    const inner = card.querySelector(".card__inner");
    inner.addEventListener("click", () => {
      inner.classList.toggle("is-flipped");
    });
  });

  nextBtn.addEventListener("click", () => {
    if (currentCard < cards.length - 1) {
      currentCard++;
      showCard(currentCard);
    } else {
      
      cardContainer.style.display = "none";
      navButtons.style.display = "none";
      challengeScreen.style.display = "flex";
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentCard > 0) {
      currentCard--;
      showCard(currentCard);
    }
  });
});



