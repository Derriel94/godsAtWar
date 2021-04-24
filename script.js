const home = document.getElementById('home');
const dieties = document.getElementById('dieties');
const locations = document.getElementById('locations');
const thanks = document.getElementById('thanks');
const body = document.getElementById('body');
const title = document.getElementById('title');



// NAVBAR

//so the home button starts with an underline
home.style.textDecoration = "underline";

home.onclick = () => {
	body.style.backgroundImage = "url('Images/home.jpg')";
	home.style.textDecoration = "underline";
	dieties.style.textDecoration = "none";
	locations.style.textDecoration = "none";
	thanks.style.textDecoration = "none";
	goHome();
}

dieties.onclick = () => {
	body.style.backgroundImage = "url('Images/back.jpg')";
	dieties.style.textDecoration = "underline";
	home.style.textDecoration = "none";
	locations.style.textDecoration = "none";
	thanks.style.textDecoration = "none";
	insertGods();
}
locations.onclick = () => {
	body.style.backgroundImage = "url('Images/locations.jpg')";
	locations.style.textDecoration = "underline";
	dieties.style.textDecoration = "none";
	home.style.textDecoration = "none";
	thanks.style.textDecoration = "none";
	checkLocations();
}
thanks.onclick = () => {
	body.style.backgroundImage = "url('Images/thanks.jpg')";
	thanks.style.textDecoration = "underline";
	dieties.style.textDecoration = "none";
	locations.style.textDecoration = "none";
	home.style.textDecoration = "none";
	thankYou();
}

//adding in god page to switch dynamically

const insertGods = () => {
	title.innerHTML = " <span>&#9876;</span> CHOOSE FROM OUR GODLY DATABASE! <span>&#9876;</span> ";
}
const goHome = () => {
	title.innerHTML = " <span>&#9876;</span> WELCOME TO GODS AT WAR! <span>&#9876;</span> ";
}
const checkLocations = () => {
	title.innerHTML = " <span>&#9876;</span> MASSIVE TEMPLES AND SHRINES! <span>&#9876;</span> ";
}
const thankYou = () => {
	title.innerHTML = " <span>&#9876;</span> THANK YOU! CONTRIBUTE IF YOU'D LIKE! <span>&#9876;</span> ";
}