
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a Match!");
	} else if (cardsInPlay.length === 1) {
		return ;
	} else {
		console.log("You have failed miserably.");
	}

}

var flipCard = function(cardId){
	console.log("Player flipped " + cards[cardId] + ".");
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(0);
flipCard(2);










//Assignment 8 check to see if it works


