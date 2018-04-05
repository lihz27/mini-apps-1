const WIN_CONDITION = 4;
// const NUM_ROWS = 6;
// const NUM_COLS = 7;

class App extends React.Component {
	
	constructor(props) {
		super(props),
		this.players = {
				'-1': 'Red',
				'1': 'Black'
			}
		this.state = {
			// board: new Array(NUM_ROWS).fill(new Array(NUM_COLS).fill(0)),
			board: [[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0]],
			whosTurn: -1
		}
	}

	render() {
		return (
			<table>
				<tbody>
					{this.state.board.map((row, rowNum) => 
						<tr key={`row${rowNum}`}>{row.map((col, colNum) => 
							<td key={`row${rowNum} col${colNum}`} onClick={this.toggle.bind(this,rowNum,colNum)}>{col}</td>)}
						</tr>)}
				</tbody>
			</table>
		)
	}

	toggle(rowNum, colNum) {
		var emptyRow;
		for (var i = this.state.board.length - 1; i >=0; i--) {
			if (this.state.board[i][colNum] === 0) {
				emptyRow = i;
				break;
			}
		}
		this.setState(prevState => {
			prevState.board[emptyRow][colNum] = prevState.whosTurn;
			return { board: prevState.board }, this.checkWinner();
		})
		this.setState(prevState => {
			return { whosTurn: prevState.whosTurn * -1};
		})
		
	}
	
	checkWinner() {
		if (!!this.checkRows()) { console.log(this.checkRows() + ' wins!') };
		// checkCols();
		// checkMajDiags();
		// checkMinorDiags();
		// checkTie();
	}
	
	checkRows() {
		for (var rowNum = 0; rowNum < this.state.board.length; rowNum++) {
			var p1Counter = 0;
			var p2Counter = 0;
			for (var colNum = 0; colNum < this.state.board[rowNum].length; colNum++) {
				if (this.state.board[rowNum][colNum] === -1) { p1Counter += -1; p2Counter = 0 };
				if (this.state.board[rowNum][colNum] === 0) { p1Counter = 0; p2Counter = 0 };
				if (this.state.board[rowNum][colNum] === 1) { p1Counter = 0; p2Counter += 1 };
				if (p1Counter === -WIN_CONDITION) { return this.players['-1']; };
				if (p2Counter === WIN_CONDITION) { return this.players['1']; };
			}
		}
	}

	// checkCols()
	// checkMajDiags()
	// checkMinorDiags()
	// checkTie()

}

