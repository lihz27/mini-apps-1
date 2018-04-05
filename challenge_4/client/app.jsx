class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			scores: [['',''],['',''],['',''],['',''],['',''],
									['',''],['',''],['',''],['',''],['','','']],
			frameScores: ['','','','','','','','','',''],
			priorRollScore: null,
			priorFrameStrike: false,
			priorFrameSpare: false,
			currentFrame: 1,									
			currentRoll: 1 // 1st, 2nd or 3rd roll 
		};
		this.hitPins = this.hitPins.bind(this);
	}

	hitPins(num) {
		this.setState((prevState) => {
			var newState = prevState;
			if (prevState.currentRoll === 1) {
				// TODO: Scoring for Strikes
				if (num === 10) {
					newState.scores[prevState.currentFrame - 1][prevState.currentRoll - 1] ='-';
					newState.scores[prevState.currentFrame - 1][prevState.currentRoll] ='X';
					newState.priorFrameStrike = true;
					newState.currentFrame++;
				}	else {
					newState.keys = prevState.keys.slice(0, 10 - num + 1);
					newState.scores[prevState.currentFrame - 1][prevState.currentRoll - 1] = num;
					newState.priorFrameStrike = false;
					newState.priorFrameSpare = false;
					newState.priorRollScore = num;
					newState.currentRoll++;
				}
			} else if (prevState.currentRoll === 2) {
				// TODO: Last Frame
				if (prevState.currentFrame === 10) {
					newState.currentRoll++;
				// TODO: Scoring for Spares
				} else {
					if (prevState.priorRollScore + num === 10) {
						newState.scores[prevState.currentFrame - 1][prevState.currentRoll - 1] = '/';
						newState.frameScores[prevState.currentFrame - 1] = '';
						newState.priorFrameSpare = true;
						newState.priorRollScore = 0;
						newState.currentRoll--;
						newState.currentFrame++;
						newState.keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
					} else {
						newState.scores[prevState.currentFrame - 1][prevState.currentRoll - 1] = num;
						newState.frameScores[prevState.currentFrame - 1] = num + prevState.priorRollScore;
						newState.priorRollScore = 0;
						newState.currentRoll--;
						newState.currentFrame++;
						newState.keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
					}
				}
			}
			return {  keys: newState.keys,
								scores: newState.scores,
								frameScores: newState.frameScores,
								priorRollScore: newState.priorRollScore,
								priorFrameStrike: newState.priorFrameStrike,
								priorFrameSpare: newState.priorFrameSpare,
								currentFrame: newState.currentFrame,
								currentRoll: newState.currentRoll,
			}
		});
	}
	
	render() {
		return (
			<div>
				<Keypad keys={this.state.keys} onClick={this.hitPins} />
				<Scorecard scores={this.state.scores} frameScores={this.state.frameScores} />	
			</div>
		);
	}

};

