document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  let currentCard = 0;  // Track the current card index

  // Function to show the current card only
  function showCard(index) {
    // Hide all cards
    cards.forEach(function (card, idx) {
      card.style.display = idx === index ? "block" : "none";
    });
  }

  // Show the first card initially
  showCard(currentCard);

  // Add event listener for the "next" button
  document.querySelector('.next').addEventListener('click', function () {
    if (currentCard < cards.length - 1) {
      currentCard++;  // Move to the next card
      showCard(currentCard);  // Show the next card
    }
  });

  // Add event listener for the "previous" button
  document.querySelector('.previous').addEventListener('click', function () {
    if (currentCard > 0) {
      currentCard--;  // Move to the previous card
      showCard(currentCard);  // Show the previous card
    }
  });

  // Add event listener for flipping the card
  cards.forEach(function (card) {
    const cardInner = card.querySelector('.card__inner');
    cardInner.addEventListener("click", function () {
      cardInner.classList.toggle('is-flipped');
    });
  });
});
