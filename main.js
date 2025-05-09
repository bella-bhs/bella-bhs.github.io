document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card__inner");

  cards.forEach(function(card) {
    card.addEventListener("click", function () {
      card.classList.toggle('is-flipped');
    });
  });
});

 document.querySelector('.next').addEventListener('click', function(event) {
        event.preventDefault();
 });
