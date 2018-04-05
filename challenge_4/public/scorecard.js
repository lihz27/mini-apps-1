'use strict';

var Scorecard = function Scorecard(props) {
	return React.createElement(
		'table',
		null,
		React.createElement(
			'tbody',
			null,
			React.createElement(
				'tr',
				null,
				props.scores.map(function (frame, frameNum) {
					return React.createElement(
						'div',
						{ className: 'frame' },
						frame.map(function (roll, rollNum) {
							return React.createElement(
								'td',
								{ className: 'roll', key: 'frame' + frameNum + 1 + ' roll' + rollNum + 1 },
								roll
							);
						})
					);
				})
			),
			React.createElement(
				'tr',
				null,
				props.frameScores.map(function (score, frameNum) {
					return React.createElement(
						'div',
						{ className: 'frame' },
						React.createElement('td', null),
						React.createElement(
							'td',
							null,
							score
						)
					);
				})
			)
		)
	);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zY29yZWNhcmQuanN4Il0sIm5hbWVzIjpbIlNjb3JlY2FyZCIsInByb3BzIiwic2NvcmVzIiwibWFwIiwiZnJhbWUiLCJmcmFtZU51bSIsInJvbGwiLCJyb2xsTnVtIiwiZnJhbWVTY29yZXMiLCJzY29yZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFFBRWhCO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNFQSxVQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxRQUFSO0FBQUEsWUFDakI7QUFBQTtBQUFBLFFBQUssV0FBVSxPQUFmO0FBQ0NELFlBQU1ELEdBQU4sQ0FBVSxVQUFDRyxJQUFELEVBQU9DLE9BQVA7QUFBQSxjQUNWO0FBQUE7QUFBQSxVQUFJLFdBQVUsTUFBZCxFQUFxQixLQUFLLFVBQVVGLFFBQVYsR0FBcUIsQ0FBckIsR0FBeUIsT0FBekIsR0FBbUNFLE9BQW5DLEdBQTZDLENBQXZFO0FBQTJFRDtBQUEzRSxRQURVO0FBQUEsT0FBVjtBQURELE1BRGlCO0FBQUEsS0FBakI7QUFERixJQUREO0FBVUM7QUFBQTtBQUFBO0FBQ0VMLFVBQU1PLFdBQU4sQ0FBa0JMLEdBQWxCLENBQXNCLFVBQUNNLEtBQUQsRUFBUUosUUFBUjtBQUFBLFlBQ3RCO0FBQUE7QUFBQSxRQUFLLFdBQVUsT0FBZjtBQUNDLHFDQUREO0FBRUM7QUFBQTtBQUFBO0FBQUtJO0FBQUw7QUFGRCxNQURzQjtBQUFBLEtBQXRCO0FBREY7QUFWRDtBQURELEVBRmdCO0FBQUEsQ0FBaEIiLCJmaWxlIjoic2NvcmVjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFNjb3JlY2FyZCA9IChwcm9wcykgPT4gKFxuXG48dGFibGU+XG5cdDx0Ym9keT5cblx0XHQ8dHI+XG5cdFx0XHR7cHJvcHMuc2NvcmVzLm1hcCgoZnJhbWUsIGZyYW1lTnVtKSA9PiBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZyYW1lJz5cblx0XHRcdFx0e2ZyYW1lLm1hcCgocm9sbCwgcm9sbE51bSkgPT5cblx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdyb2xsJyBrZXk9eydmcmFtZScgKyBmcmFtZU51bSArIDEgKyAnIHJvbGwnICsgcm9sbE51bSArIDF9Pntyb2xsfTwvdGQ+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L3RyPlxuXHRcdDx0cj5cblx0XHRcdHtwcm9wcy5mcmFtZVNjb3Jlcy5tYXAoKHNjb3JlLCBmcmFtZU51bSkgPT4gXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmcmFtZSc+XG5cdFx0XHRcdFx0PHRkPjwvdGQ+XG5cdFx0XHRcdFx0PHRkPntzY29yZX08L3RkPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC90cj5cblx0PC90Ym9keT5cbjwvdGFibGU+XG5cbik7Il19