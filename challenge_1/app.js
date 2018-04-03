window.onload = init;

var FIRST_GAME = true;
var FIRST_TURN = 'X';
var PLAYER_1_NAME = 'X';
var PLAYER_2_NAME = 'O';
var PLAYER_1_SCORE = 0;
var PLAYER_2_SCORE = 0;

function init() {
	
	if (FIRST_GAME) {
		PLAYER_1_NAME = prompt('What\'s your name Player 1?', PLAYER_1_NAME);
		PLAYER_2_NAME = prompt('What\'s your name Player 2?', PLAYER_2_NAME);
		FIRST_GAME = false;
	}

	var table = document.createElement('table');
	table.setAttribute('id', 'table');
	document.getElementById('app').appendChild(table);

	window.Game = new Board(FIRST_TURN);
	for (var rowNum = 0; rowNum < Game.board.length; rowNum++) {
		var newRow = document.createElement('tr');
		for (var colNum = 0; colNum < Game.board[rowNum].length; colNum++) {
			var newCell = document.createElement('td');
			newCell.setAttribute('class', `row${rowNum} col${colNum}`);
			newCell.setAttribute('width', '20px');
			newCell.setAttribute('height', '20px');
			newCell.setAttribute('style', 'border: thin solid black');
			newCell.setAttribute('onclick', 'Game.toggle(this)');
			newRow.appendChild(newCell);
		}
		document.getElementById('table').appendChild(newRow);
	}

	renderScore();

};

function renderScore() {
	var player_1_score_display = document.createElement('h4');
	var player_2_score_display = document.createElement('h4');
	var player_1_score = document.createTextNode(`[X] ${PLAYER_1_NAME}: ${PLAYER_1_SCORE}`);
	var player_2_score = document.createTextNode(`[O] ${PLAYER_2_NAME}: ${PLAYER_2_SCORE}`);
	player_1_score_display.appendChild(player_1_score);
	player_2_score_display.appendChild(player_2_score);
	player_1_score_display.setAttribute('id', 'player_1_score');
	player_2_score_display.setAttribute('id', 'player_2_score');
	document.getElementById('app').appendChild(player_1_score_display);
	document.getElementById('app').appendChild(player_2_score_display);
};

function reset() {
	document.getElementById('winnerMessage').remove();
	document.getElementById('resetButton').remove();
	document.getElementById('table').remove();
	document.getElementById('player_1_score').remove();
	document.getElementById('player_2_score').remove();
	init();
};

var Board = function(FIRST_TURN) {	
	/* {'0': 'Empty'}, {'1': 'X'}, {'-1': 'O'} */
	this.board = [[0, 0, 0],
								[0, 0, 0],
								[0, 0 ,0]],
	this.whosTurn = FIRST_TURN,
	this.gameOver = false
}

Board.prototype.toggle = function(cell) {
	if (!this.gameOver) {
		var str = cell.getAttribute('class');
		var rowNum = str[str.search(/row/) + 3];
		var colNum = str[str.search(/col/) + 3];;
		if (!this.board[rowNum][colNum]) {
			this.whosTurn === 'X' ? this.board[rowNum][colNum] = 1 : this.board[rowNum][colNum] = -1;
			var value = document.createTextNode(this.whosTurn);
			cell.appendChild(value);
			this.checkWinner();
			this.checkForTie();
			this.whosTurn === 'X' ? this.whosTurn = 'O' : this.whosTurn = 'X';
		}
	}
},

Board.prototype.displayWinner = function(playerName) {
	this.gameOver = true;
	var winnerMessage = document.createElement('h3');
	var message = document.createTextNode(`${playerName} wins!`);
	if (playerName === 'Tie!') { message = document.createTextNode(`${playerName}`) };
	winnerMessage.appendChild(message);
	winnerMessage.setAttribute('id', 'winnerMessage');
	app.appendChild(winnerMessage);
	var resetButton = document.createElement('button');
	var text = document.createTextNode('Start Over');
	resetButton.appendChild(text);
	resetButton.setAttribute('id', 'resetButton');
	resetButton.setAttribute('onclick', 'reset()')
	app.appendChild(resetButton);
},

Board.prototype.checkWinner = function() {
	this.checkRows();
	this.checkCols();
	this.checkMajDiag();
	this.checkMinDiag();
},

Board.prototype.checkLine = function(line) {
	var total = line.reduce(function(acc, val) { return acc + val; }, 0);
	if (total === 3) { PLAYER_1_SCORE += 1; FIRST_TURN = 'X'; this.displayWinner(PLAYER_1_NAME); }
	if (total === -3) { PLAYER_2_SCORE += 1; FIRST_TURN = 'O'; this.displayWinner(PLAYER_2_NAME); }
},

Board.prototype.checkRows = function() {
	for (var rowNum = 0; rowNum < this.board.length; rowNum++) {
		this.checkLine(this.board[rowNum]);
	}
},

Board.prototype.checkCols = function() {
	for (var colNum = 0; colNum < this.board.length; colNum++) {
		var col = [];
		for (var rowNum = 0; rowNum < this.board.length; rowNum++) {
			col.push(this.board[rowNum][colNum])
		}
		this.checkLine(col);
	}
},

Board.prototype.checkMajDiag = function() {
	var majDiag = [];
	for (var rowNum = 0; rowNum < this.board.length; rowNum++) {
		majDiag.push(this.board[rowNum][rowNum]);
	}
	this.checkLine(majDiag);
},

Board.prototype.checkMinDiag = function() {
	var minDiag = [];
	for (var rowNum = 0; rowNum < this.board.length; rowNum++) {
		minDiag.push(this.board[rowNum][this.board.length - 1 - rowNum]);
	}
	this.checkLine(minDiag);	
},

Board.prototype.checkForTie = function() {
	var tie = true;
	var arr = this.board;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			tie = tie && arr[i][j];
		}
	}
	if (tie && !this.gameOver) { this.displayWinner('Tie!') };
}