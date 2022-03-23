import { starships } from "./starships.js";
console.log(starships[6].crew);
var compareCrew = function (a, b) {
	return a.crew - b.crew;
};
starships.sort(compareCrew);
console.log(starships);
const starshipsElement = document.querySelector("#starships");
starshipsElement.innerHTML = "";
starships.forEach((ship) => {
	const div = document.createElement("div");
	div.setAttribute("class", "ship");
	const name = document.createElement("h1");
	name.textContent = ship.name;
	name.setAttribute("class", "shipname");
	div.appendChild(name);
	const crew = document.createElement("p");
	crew.textContent = ship.crew;
	div.appendChild(crew);
	starshipsElement.appendChild(div);
});
