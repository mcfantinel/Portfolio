/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var activePlayer=1;



$('.btn-new').click(function() {
	$('.player-1-panel').removeClass('winner');
	$('.player-2-panel').removeClass('winner');
	$('#score-1').text('0');
	$('#score-2').text('0');
	$('#current-1').text('0');
	$('#current-2').text('0');
	$('.btn-hold').prop("disabled",false);
	$('.btn-roll').prop("disabled",false);
});

$('.btn-roll').click(function() {
	var diceRoll = Math.floor(Math.random()*6) + 1;
	$('.dice').attr('src','Images/dice-' + diceRoll + '.png');

	if(diceRoll === 1) {
		$('#current-' + activePlayer).text('0');
		changeActivePlayers();
	} else {
		var currentVal = parseInt($('#current-' + activePlayer).text()) + diceRoll;
		$('#current-' + activePlayer).text(currentVal);
	}
});

$('.btn-hold').click(function() {
	var updatedScore = parseInt($('#score-' + activePlayer).text()) + parseInt($('#current-' + activePlayer).text());
	$('#score-' + activePlayer).text(updatedScore);
	if(updatedScore >= 20) {
		$('.player-1-panel').removeClass('active');
		$('.player-2-panel').removeClass('active');
		$('.player-2-panel').addClass('winner');
		$('.btn-hold').prop("disabled",true);
		$('.btn-roll').prop("disabled",true);
	} else {
		changeActivePlayers();
	}
});

function changeActivePlayers() {
	$('#current-' + activePlayer).text('0');

	activePlayer = activePlayer === 1 ? 2 : 1;
	
	$('.player-1-panel').toggleClass('active');
	$('.player-2-panel').toggleClass('active');
}