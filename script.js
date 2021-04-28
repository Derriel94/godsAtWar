const home = document.getElementById('home');
const dieties = document.getElementById('dieties');
const locations = document.getElementById('locations');
const thanks = document.getElementById('thanks');
const body = document.getElementById('body');
const title = document.getElementById('title');
let section = document.getElementById('section');
let homeText = document.getElementById('home-text');
let newHomeText = document.createElement('P');
let media = document.getElementById('media-wrapper');
let isGods = false;
let isArenas = false;

//gods array
const Gods = [ 
	{ name: 'Anubis',
	  lore: 'Egyptian',
	  src: "Images/anubis.png",
	  desc: "Before Osiris took over, Anubis patrolled the underworld." + 
	    " Anubis was a “psychopomp,” or deity who assists in the afterlife," +
	    " and was the offspring of Ra and Nephthys. He was known for " +
	    " mummifying the dead and guiding their souls towards the afterlife. " +
	    " His skin was black, symbolizing the dark Nile deposits which made the land so fertile. " +
	    " With the head of a jackal and the body of a man, Anubis also stood for renaissance" +
	    " and the staining of dead bodies after the embalming process."
	 },
	 { name: 'Amun-Ra',
	  lore: 'Egyptian',
	  src: "Images/amunRa.jpg",
	  desc: "As Zeus was to the Greeks, the Egyptian god Amun-Ra or Amon was considered the king of the" +
	  		"gods and goddesses. He became Amun-Ra after being amalgamated with the sun god Ra. He" +
	  		"was thought to be the father of the pharaohs, and his female counterpart, Amunet, was called the" +
	  		"Female Hidden One. Forming the Theban Triad, Amun and Mut along with their son Khonsu, the" +
	  		"moon god, were worshiped throughout ancient Egypt. Amun was not only worshiped in Egypt, but" +
	  		"idk im so tired bro lol"
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

const Arenas = [
	{
		name: 'The Pyramid of Giza',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'The Mayan Temple',
		lore: 'Mayan',
		src:  "Images/mt.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},
	{
		name: 'Pyramid of Giesa',
		lore: ' Egyptian',
		src:  "Images/pog.jpg"
	},


];

// NAVBAR

//so the home button starts with an underline
home.style.textDecoration = "underline";
home.style.textDecorationColor = "white";

home.onclick = () => {
	body.style.backgroundImage = "url('Images/home.jpg')";
	home.style.textDecoration = "underline";
	home.style.textDecorationColor = "white";
	dieties.style.textDecoration = "none";
	locations.style.textDecoration = "none";
		if (isGods) {
			removeGods();
			isGods = false;
		}
		 if (isArenas) {
			removeArenas();
			isArenas = false;
		}
	goHome();
}

dieties.onclick = () => {
	body.style.backgroundImage = "url('Images/back2.jpg')";
	dieties.style.textDecoration = "underline";
	dieties.style.textDecorationColor = "white";
	home.style.textDecoration = "none";
	locations.style.textDecoration = "none";
	if (!isGods) {
		insertGods();
		isGods = true;
		media.remove();
	} 
	 if (isArenas) {
		removeArenas();
		isArenas = false;
		}
}
locations.onclick = () => {
	body.style.backgroundImage = "url('Images/back3.jpg')";
	locations.style.textDecoration = "underline";
	locations.style.textDecorationColor = "white";
	dieties.style.textDecoration = "none";
	home.style.textDecoration = "none";
	if (isGods) {
		removeGods();
		isGods = false;
		media.remove();
	} 
	 if (!isArenas){
		checkLocations();
		isArenas = true;
	}
	
}
media.onclick = () => {
	body.style.backgroundImage = "url('Images/back2.jpg')";
	dieties.style.textDecoration = "underline";
	dieties.style.textDecorationColor = "white";
	home.style.textDecoration = "none";
	locations.style.textDecoration = "none";
	if (!isGods) {
		insertGods();
		isGods = true;
		media.remove();
	} 
	 if (isArenas) {
		removeArenas();
		isArenas = false;
		}
}



const insertGods = () => {
	title.innerHTML = " <span>&#9876;</span> Know your Gods! <span>&#9876;</span> ";
	homeText.remove();
	for (i=0; i < Gods.length; i++) {
	let godDiv = document.createElement('DIV');
	godDiv.setAttribute("id", "godDiv");
    let godName = document.createElement('P');
    godName.setAttribute("id", "godName");
    let godImg = document.createElement("IMG");
    godImg.setAttribute("class", "godImg");
    let godDesc = document.createElement("P");
    godDesc.setAttribute("id", "godDesc");
    let godInfo = document.createElement('DIV');
    godInfo.setAttribute("id", "godInfo");
	godName.innerHTML = Gods[i].name;
	godImg.src = Gods[i].src;
	godDesc.innerHTML = Gods[i].desc;
	section.appendChild(godDiv);
	section.setAttribute("id", " ");
	godDiv.appendChild(godImg);
	godDiv.appendChild(godInfo);
	godInfo.appendChild(godName)
	godInfo.appendChild(godDesc);
    }


}
const goHome = () => {
	title.innerHTML = " <span>&#9876;</span> WELCOME TO GODS AT WAR! <span>&#9876;</span> ";
	section.appendChild(homeText);
	section.appendChild(media);

}
const checkLocations = () => {
	title.innerHTML = " <span>&#9876;</span> MASSIVE TEMPLES AND SHRINES! <span>&#9876;</span> ";
	homeText.remove();
	for (i=0; i < Arenas.length; i++){
		let arenaDiv = document.createElement('DIV');
		arenaDiv.setAttribute("id", "arenaDiv");
		let arenaName = document.createElement('P');
		arenaName.setAttribute("id", "arenaName");
		let arenaImg = document.createElement('IMG');
		arenaImg.setAttribute("id", "arenaImg");
		arenaName.innerHTML = Arenas[i].name;
		arenaImg.src = Arenas[i].src;
		section.setAttribute("id", "arena-wrapper");
		section.appendChild(arenaDiv);
		arenaDiv.appendChild(arenaName);
		arenaDiv.appendChild(arenaImg);
	}

	// section.appendChild(homeText);
}
const removeGods = () => {
	for (i=0; i < Gods.length; i++) {
		document.getElementById('godDiv').remove();
	}
}
const removeArenas = () => {
	for (i=0; i < Arenas.length; i++) {
		document.getElementById('arenaDiv').remove();
	}
	section.setAttribute("id", " ");
}


