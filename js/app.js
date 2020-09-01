const cards = document.querySelectorAll(".card-inner");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

//You can see full tutorial here
//https://www.ricardomoreira.io/blog/2020-06-15-flip-cards-with-javascript