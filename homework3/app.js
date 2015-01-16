// Function to determine the player
var tiles = document.querySelectorAll('.tile');

var playerX = 'X';
var playerY = 'O';
var trackTurn = 0;

for(var i = 0; i < tiles.length; i++) {
	tiles[i].addEventListener('click', function(){
		$(this).attr('disabled','disabled');
		if(trackTurn % 2 == 0) {
			console.log(trackTurn);
			this.value = 'X';
			console.log(this.value);
			checkWinner(playerX);
		} else {
			console.log(trackTurn);
			this.value = 'O';
			console.log(this.value);
			checkWinner(playerY);
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

	// Check top row
	if(topLeft.value == player && topCenter.value == player && topRight.value == player) {
		alert(player + " wins!");
		window.location.reload('true');
	}

	// Check bottom row
	if(bottomLeft.value == player && bottomCenter.value == player && bottomRight.value == player) {
		alert(player + " wins!");
		window.location.reload('true');
	}

	if(middleLeft.value == player && middleCenter.value == player && middleRight.value == player) {
		alert(player + " wins!");
		window.location.reload('true');
	}

	if(topCenter.value == player && middleCenter.value == player && bottomCenter.value == player) {
		alert(player + " wins!");
		window.location.reload('true');
	}

	// Check right row
	if(topRight.value == player && middleRight.value == player && bottomRight.value == player) {
		alert(player + " wins!");
		window.location.reload('true');
	}

	// Check left row
	if (topLeft.value == player && middleLeft.value == player && bottomLeft.value == player) {
		alert(player + " wins!");
		window.location.reload('true');
	}

	// Check diagonal from left to right 
	if (topLeft.value == player && middleCenter.value == player && bottomRight.value == player) {
		alert(player + " wins!");
		window.location.reload('true');
	}

	// Check diagonal from right to left 
	if (topRight.value == player && middleCenter.value == player && bottomLeft.value == player) {
		alert(player + " wins!");
		window.location.reload('true');
	}
}