// var first = prompt("What's your first name?");
// var last = prompt("What's your last name?");
// alert("Hello, " + first + " " + last)

// var hey = prompt("Give me a string");
// alert(hey.toUpperCase());

// var first = prompt("What's your first name?");
// var last = prompt("What's your last name?");
// alert("Hello, " + first + " " + last.toUpperCase());

var hey = prompt("What's your age?")
if (hey < 21) {
	alert("You can't come in");
} else if (hey >= 21) {
	alert("Come on in");
} else if (hey < 0 || hey > 100) {
	alert("GTFO");
} else {
	alert("wtf is this input. don't mess with me, punk");
};