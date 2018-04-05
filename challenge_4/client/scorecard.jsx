let Scorecard = (props) => (

<table>
	<tbody>
		<tr>
			{props.scores.map((frame, frameNum) => 
				<div className='frame'>
				{frame.map((roll, rollNum) =>
					<td className='roll' key={'frame' + frameNum + 1 + ' roll' + rollNum + 1}>{roll}</td>
				)}
				</div>
			)}
		</tr>
		<tr>
			{props.frameScores.map((score, frameNum) => 
				<div className='frame'>
					<td></td>
					<td>{score}</td>
				</div>
			)}
		</tr>
	</tbody>
</table>

);