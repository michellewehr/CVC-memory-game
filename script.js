

const cards = document.querySelectorAll('.memory-card');
const frontCards = document.querySelectorAll('.front-face');
const backCards = document.querySelectorAll('.back-face');
let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if (this === firstCard) return;
        this.classList.add('hidden'); 

        if (!hasFlipped) {
            hasFlipped = true;
            firstCard = this;
        } else{
            hasFlipped = false;
            secondCard = this;

      checkForMatch();
        }
}

function checkForMatch(){
   let isMath = firstCard.dataset.framework === 
   secondCard.dataset.framework;
   
   isMath ? disableCards() : unFlipCards();
}

function disableCards(){
    firstCard.removeEventListener('click',flipCard)
    secondCard.removeEventListener('click',flipCard)
    setTimeout(()=> {
        firstCard.classList.add('smiley');
        secondCard.classList.add('smiley');
        firstCard.classList.remove('hidden');
        secondCard.classList.remove('hidden');
    }, 2000);
}
function unFlipCards(){
    setTimeout(()=> {
        firstCard.classList.remove('hidden')
        secondCard.classList.remove('hidden')
    }, 2000);
}


frontCards.forEach(frontCard => frontCard.addEventListener('click', flipCard));