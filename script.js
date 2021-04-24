const home = document.getElementById('home');
const dieties = document.getElementById('dieties');
const locations = document.getElementById('locations');
const thanks = document.getElementById('thanks');
const body = document.getElementById('body');
const title = document.getElementById('title');
let section = document.getElementById('section');
let homeText = document.getElementById('home-text');
let newHomeText = document.createElement('P');
	// let godDiv = document.createElement('DIV');
    // let godName = document.createElement('P');
    // let godImg = document.createElement("IMG");
    // let godDesc = document.createElement("P");

// CSS for Gods

let isClicked = false;

//gods array
const Gods = [ 
	{ name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },
	 { name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },
	 { name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },
	 { name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },
	 { name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },
	 { name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },
	 { name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },
	 { name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },
	 { name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },
	 { name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: 'This is the description of said god'
	 },

];
console.log(Gods[0].name);

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
// const createGods = () => {
// let godDiv = document.createElement('DIV');
// let godName = document.createElement('P');
// let godImg = document.createElement("IMG");
// let godDesc = document.createElement("P");
// godDiv.style.display = 'flex';
// }

const insertGods = () => {
	title.innerHTML = " <span>&#9876;</span> CHOOSE FROM OUR GODLY DATABASE! <span>&#9876;</span> ";
	homeText.remove();
	const newSection = document.createElement('DIV');
	newSection.classList.add('section-wrapper');
	for (i=0; i < Gods.length; i++) {
	let godDiv = document.createElement('DIV');
	godDiv.setAttribute("id", "godDiv");
    let godName = document.createElement('P');
    let godImg = document.createElement("IMG");
    let godDesc = document.createElement("P");
	godName.innerHTML = Gods[i].name;
	godImg.src = Gods[i].src;
	godDesc.innerHTML = Gods[i].desc;
	section.appendChild(godDiv);
	godDiv.appendChild(godName);
	godDiv.appendChild(godImg);
	godDiv.appendChild(godDesc);
    }
    isClicked = true;
    if (isClicked) {
		 dieties.onclick = function() {
     return false; }
 	} else {
    	dieties.onclick = () => {
	body.style.backgroundImage = "url('Images/back.jpg')";
	dieties.style.textDecoration = "underline";
	home.style.textDecoration = "none";
	locations.style.textDecoration = "none";
	thanks.style.textDecoration = "none";
	insertGods();
}
    }

}
const goHome = () => {
	title.innerHTML = " <span>&#9876;</span> WELCOME TO GODS AT WAR! <span>&#9876;</span> ";
	removeGods();
	section.appendChild(homeText);
	isClicked = false;
	// removeit();
	// const newSection = document.createElement('DIV');
	// newSection.classList.add('section-wrapper');
	// body.appendChild(newSection);
	// newSection.appendChild(homeText);
}
const checkLocations = () => {
	title.innerHTML = " <span>&#9876;</span> MASSIVE TEMPLES AND SHRINES! <span>&#9876;</span> ";
	removeGods();
	section.appendChild(homeText);
}
const thankYou = () => {
	title.innerHTML = " <span>&#9876;</span> THANK YOU! CONTRIBUTE IF YOU'D LIKE! <span>&#9876;</span> ";
	removeGods();
	section.appendChild(homeText);
}

const removeit = () => {
	 homeText.remove();
}
const removeGods = () => {
	for (i=0; i < Gods.length; i++) {
		document.getElementById('godDiv').remove();
	}
}

