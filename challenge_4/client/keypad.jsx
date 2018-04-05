let Keypad = (props) => (
	
	<div>
		{props.keys.map((num, index) => 
			<div className='keyNum' key={'num' + index} onClick={props.onClick.bind(null, num)}>
				{num}
			</div>
		)}
	</div>

);