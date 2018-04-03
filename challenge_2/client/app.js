$(document).ready(function() {

	$('#app').append(`<form id='form'></form>`);
	$('#form').append(`<input type=textarea id='text'>`);
	$('#form').append(`<button type=submit id="submit">Submit</button>`);

	$app = $('#app');
	$form = $('#form');
	$text = $('#text');
	$submit = $('#submit');

	var handleSubmit = function(event) {
		var message = { text: $text.val() }; 
		$.ajax({
			type: 'POST',
			data: JSON.stringify(message),
			contentType: 'application/json',
			success: function(data) {
				$text.val(''); 
				console.log(data);
				render(data);
			}
		});
		event.preventDefault();
	}

	$submit.on('click', handleSubmit);

	var render = function(data) {
		$app.append(data);
	}

});