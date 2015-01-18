var tiles = document.querySelectorAll('.tile');

var playerX = 'X';
var playerO = 'O';
var trackTurn = 0;

for(var i = 0; i < tiles.length; i++) {
	tiles[i].addEventListener('click', function(){
		$(this).attr('disabled','disabled');
		if(trackTurn % 2 == 0) {
			this.value = 'X';
			if(checkWinner(playerX)) {
				showDialog(playerX);
			}
		} else {
			this.value = 'O';
			if(checkWinner(playerO)) {
				showDialog(playerO);
			}
		}
		trackTurn++;
	});
}


// Variables to hold the elements
var topLeft = document.getElementById('topLeft');
var topCenter = document.getElementById('topCenter');
var topRight = document.getElementById('topRight');
var middleLeft = document.getElementById('middleLeft');
var middleCenter = document.getElementById('middleCenter');
var middleRight = document.getElementById('middleRight');
var bottomLeft = document.getElementById('bottomLeft');
var bottomCenter = document.getElementById('bottomCenter');
var bottomRight = document.getElementById('bottomRight');

// Function to handle winning the gamae

function checkWinner(player) {

	var data = false;

	// Check top row
	if(topLeft.value == player && topCenter.value == player && topRight.value == player) {
		gameOver();
	}

	// Check bottom row
	if(bottomLeft.value == player && bottomCenter.value == player && bottomRight.value == player) {
		gameOver();
	}

	// Check middle row horizontal
	if(middleLeft.value == player && middleCenter.value == player && middleRight.value == player) {
		gameOver();
	}

	// Check middle row vertical
	if(topCenter.value == player && middleCenter.value == player && bottomCenter.value == player) {
		gameOver();
	}

	// Check right row
	if(topRight.value == player && middleRight.value == player && bottomRight.value == player) {
		gameOver();
	}

	// Check left row
	if (topLeft.value == player && middleLeft.value == player && bottomLeft.value == player) {
		gameOver();
	}

	// Check diagonal from left to right 
	if (topLeft.value == player && middleCenter.value == player && bottomRight.value == player) {
		gameOver();
	}

	// Check diagonal from right to left 
	if (topRight.value == player && middleCenter.value == player && bottomLeft.value == player) {
		gameOver();
	}
	
	if(trackTurn > 7) {
		var catsGame = topLeft.value !== '' && topCenter.value !== '' && topRight.value !== '' && middleLeft.value !== '' && middleCenter.value !== '' && middleRight.value !== '' && bottomLeft.value !== '' && bottomCenter.value !== '' && bottomRight.value !== '';
		
		if(!(data) && (catsGame)) {
			alert('Cats Game!');
			window.location.reload('true');
		}
	}

	function gameOver() {
		data = true;
	}

	return data;
}

function showDialog(player) {
	$.ajax({
		url: "dialog.html"
	}).done(function(response) {
		$('body').append(response);
		$('.dialogHeader').append(player + " wins!")
		$('.dialogBtn').on('click', function() {
			window.location.reload('true');
		});
	});
}