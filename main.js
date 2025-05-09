document.addEventListener("DOMContentLoaded",
                          function(){
  const card=document.querySelectorAll(".card__inner");

                          cards.forEach(function(card){
                            card.addEventListener("click",function(){
                              card.classList.toggle('is-flipped');
                            });
                          });
                          });

document.querySelector('.next').addEventListener('click,
                                                 function(even) {
event.preventDefault();
});
