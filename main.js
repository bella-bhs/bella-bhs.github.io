const cards = document.querySelectorAll(".card__inner");
cards.forEach(function(card) {
  card.addEvenListener("click, function () {
                       card.classList.toggle('is-flipped');
});
});
