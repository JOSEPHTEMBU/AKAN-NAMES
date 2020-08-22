var akanMaleNames = [
	"Kwasi",
	"Kwadwo",
	"Kwabena",
	"Kwaku",
	"Yaw",
	"Kofi",
	"Kwame",
];
var akanFemaleNames = [
	"Akosua",
	"Adwoa",
	"Abena",
	"Akua",
	"Yaa",
	"Afua",
	"Ama",
];

function getAkanName() {
	var gender = document.getElementById("gender").value;
	var dateOfBirth = document.getElementById("date").value;
	var DD = parseInt(dateOfBirth.substr(8, 9));
	var CC = parseInt(dateOfBirth.substr(0, 2));
	var MM = parseInt(dateOfBirth.substr(5, 6));
	var YY = parseInt(dateOfBirth.substr(1, 3));
	var day = parseInt(
		(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
	);

	if (gender == "Female") {
		alert("Your Ghanaian name equivalent is " + akanFemaleNames[day]);
	} else {
		alert("Your Ghanaian name equivalent is " + akanMaleNames[day]);
	}
}
