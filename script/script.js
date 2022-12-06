// ----- Date Time ------ //
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const date = new Date();
const dayName = daynames[date.getDay()];
const monthName = months[date.getMonth()];
const year = date.getFullYear();
const fulldate = `${dayName}, ${date.getDate()} ${monthName} ${year}`;

document.getElementById("current_date").textContent = fulldate;
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastupdate').textContent = document.lastModified;