'use strict';

var Keypad = function Keypad(props) {
	return React.createElement(
		'div',
		null,
		props.keys.map(function (num, index) {
			return React.createElement(
				'div',
				{ className: 'keyNum', key: 'num' + index, onClick: props.onClick.bind(null, num) },
				num
			);
		})
	);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9rZXlwYWQuanN4Il0sIm5hbWVzIjpbIktleXBhZCIsInByb3BzIiwia2V5cyIsIm1hcCIsIm51bSIsImluZGV4Iiwib25DbGljayIsImJpbmQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxRQUVaO0FBQUE7QUFBQTtBQUNFQSxRQUFNQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLEtBQU47QUFBQSxVQUNmO0FBQUE7QUFBQSxNQUFLLFdBQVUsUUFBZixFQUF3QixLQUFLLFFBQVFBLEtBQXJDLEVBQTRDLFNBQVNKLE1BQU1LLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixFQUF5QkgsR0FBekIsQ0FBckQ7QUFDRUE7QUFERixJQURlO0FBQUEsR0FBZjtBQURGLEVBRlk7QUFBQSxDQUFiIiwiZmlsZSI6ImtleXBhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBLZXlwYWQgPSAocHJvcHMpID0+IChcblx0XG5cdDxkaXY+XG5cdFx0e3Byb3BzLmtleXMubWFwKChudW0sIGluZGV4KSA9PiBcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdrZXlOdW0nIGtleT17J251bScgKyBpbmRleH0gb25DbGljaz17cHJvcHMub25DbGljay5iaW5kKG51bGwsIG51bSl9PlxuXHRcdFx0XHR7bnVtfVxuXHRcdFx0PC9kaXY+XG5cdFx0KX1cblx0PC9kaXY+XG5cbik7Il19