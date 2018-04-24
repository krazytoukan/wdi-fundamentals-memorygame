var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

//CheckforMatch Logic

var checkForMatch = function() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You've found a Match!");
	} else {
		alert("You have failed miserably.");
	}
};

//flipCard Logic

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId]);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

//Game Board logic

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


createBoard();

//Reset Button Logic
/*
var boardReset = function(){
	cardsInPlay = undefined;
	cardElement[1].setAttribute('src', 'images/back.png');
	cardElement[2].setAttribute('src', 'images/back.png');
	cardElement[3].setAttribute('src', 'images/back.png');
	cardElement[4].setAttribute('src', 'images/back.png');
	alert ('Game Reset!');
}

var reset = document.querySelector('button');
reset.addEventListener ('click', boardReset);
*/












