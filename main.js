
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

   function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove('active');
       if (i === index) {
        card.classList.add('active');
          }
    });
  }
   showCard(currentIndex);
   const cardInners = document.querySelectorAll(".card__inner");
  cardInners.forEach(card => {
    card.addEventListener("click", function () {
      card.classList.toggle('is-flipped');
        });
  });
   document.querySelector(".next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
  });
  document.querySelector(".previous").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });
});
