class App extends React.Component {
	
	constructor(props) {
		super(props),
		this.NUM_ROWS = 6,
		this.NUM_COLS = 7,
		this.FIRST_TURN = 'Red',
		this.state = {
			board : new Array(this.NUM_ROWS).fill(new Array(this.NUM_COLS).fill(0)),
			whosTurn: this.FIRST_TURN
		}
	}

	render() {
		console.log(this.state.board);
		return (
		// for each ROW
			// for each COL
				// print table cell with onclick event handler 
			<table>
				<tbody>
					{this.state.board.map(row => <tr>{row.map(val => <td>{val}</td>)}</tr>)}
				</tbody>
			</table>
		)
	}

	// toggle()
		// this.setState
	// checkWinner()
	// checkRows()
	// checkCols()
	// checkMajDiags()
	// checkMinorDiags()
	// checkTie()

}
