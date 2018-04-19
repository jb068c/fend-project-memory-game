/*
 * Create a list that holds all of your cards
 */
const lists = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb',
               'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];
const openCards = [];
let match = 0;
// * Display the cards on the page
 /*
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
const deck = document.getElementsByTagName('UL')[1];
lists.forEach(function(i){
   const cards = document.createElement('LI');
   const image = document.createElement('I');
   cards.classList.add('card');
   image.classList.add(i);
   cards.appendChild(image);
   deck.appendChild(cards);
   shuffle(lists);
});
document.body.getElementsByClassName('container')[0].appendChild(deck);

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



  // set up the event listener for a card. If a card is clicked:
 const card = document.getElementsByClassName('card');
 for (let i = 0; i < card.length; i++){
   card[i].addEventListener('click',function() {
     addClass(card[i]);
     addCard(card[i]);
     compare();
   })
};


//   - display the card's symbol (put this functionality in another function that you call from this one)
 function addClass(ele){
  ele.classList.add('open', 'show');
}

// *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
// function addCard(){
function addCard(ele){
  const image = ele.getElementsByTagName('I')[0].classList.item(0);{
    openCards.push(image);
    console.log(openCards);


  }
};

function compare(){
if (openCards.length == 2){
  if(openCards[0] === openCards[1]) {
    match++
    console.log("match");
  } else{
    console.log("no match");
    openCards.length === 0;
    this.classList.remove('open', 'show');
  }
} else {
  addCard();
  console.log(openCards);
};
}
 /*
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
