const card = document.querySelector('.card__inner');

card.addEvenListener('click', function () {
  card.classList.toggle('is-flipped')
});
