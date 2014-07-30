var reservations = {
  'Billy': { claimed: false },
  'Joe' : { claimed: true }
};

$('#claim').on('click', function (e) {
  var name = $('#user-input').val();
  console.log(name);
  if (name in reservations) {
  	if ( reservations[name]['claimed'] === false ) {
      reservations[name]['claimed'] = true;
      $('#response').text('Welcome to McDonalds, ' + name + "!");
  	} else {
      $('#response').text('Reservation has already been claimed.');
   	};
  } else {
  	$('#response').text('There is no reservation under that name. Please make a new reservation.');
  };
});

$('#reserve').on('click', function (e) {

  var name = $('#user-input').val();
  // var name = prompt("What name should we reserve under?");
  if (name in reservations) {
  	if ( reservations[name]['claimed'] === false ) {
  		$('#response').text("There's another reservation under that name. Reserve under a different name.");
  	} else {
  		reservations[name] = {claimed: false }
  		$('#response').text("Your new reservation has been created, " + name + "!");
  	};
  } else {
  	reservations[name] = {claimed: false }
  	$('#response').text("Your new reservation has been created, " + name + "!");
  };
});
