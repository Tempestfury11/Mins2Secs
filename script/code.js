// Global constants
const btn = document.getElementById('btn');
const numSecs = document.getElementById('numSecs');
const numMins = document.getElementById('numMins');

// Handler to prevent form submission
form.addEventListener('submit', (e) => e.preventDefault());

//Convert seconds to minutes
numSecs.addEventListener('keyup', (e) => {
	let value = numSecs.value;
	numMins.value = (value / 60);	
});