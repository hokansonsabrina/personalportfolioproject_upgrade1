import { starships } from "./starships.js";
import { planets } from "./planets.js";
var compareCrew = function (a, b) {
	return a.crew - b.crew;
};
starships.sort(compareCrew);
const starshipsElement = document.querySelector("#starships");
if (starshipsElement != null) {
	starshipsElement.innerHTML = "";
	starships.forEach((ship) => {
		const div = document.createElement("div");
		// div.innerHTML = `<div class="ship"><h1>${ship.name}</h1><p>Crew: ${ship.crew}</p></div>`;
		div.setAttribute("class", "ship");
		const name = document.createElement("h1");
		name.textContent = ship.name;
		name.setAttribute("class", "shipname");
		div.appendChild(name);
		const crew = document.createElement("p");
		crew.innerHTML = `Crew Count:${ship.crew}`;
		div.appendChild(crew);
		starshipsElement.appendChild(div);
	});
}

var compareDiameter = function (a, b) {
	return a.diameter - b.diameter;
};

planets.sort(compareDiameter);
const planetsElement = document.querySelector("#planets");
if (planetsElement != null) {
	planetsElement.innerHTML = "";
	planets.forEach((planet) => {
		const div = document.createElement("div");
		div.setAttribute("class", "planet");
		const planetname = document.createElement("h1");
		planetname.textContent = planet.name;
		planetname.setAttribute("class", "planetname");
		div.appendChild(planetname);
		const planetdiameter = document.createElement("p");
		planetdiameter.innerHTML = `Planet Diameter:${planet.diameter}`;
		div.appendChild(planetdiameter);
		planetsElement.appendChild(div);
	});
}
