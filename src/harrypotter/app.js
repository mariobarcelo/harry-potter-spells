let spellName;
let spellDescription;
let nextSpellButton;
let element;

/**
 * @returns {Promise<Object>} quote information
 */
const fetchSpell = async () => {
	const res = await fetch("https://hp-api.onrender.com/api/spells");

	console.log(res);

	// Fetching correct
	if (res.status === 200) {
		const data = await res.json();

		const randomSpell = data[Math.floor(Math.random() * data.length)];

		return randomSpell;
	}

	// Fetching error
	spellName.innerHTML = "Oops!";
	spellDescription.innerHTML =
		"A Death Eater interferes with the connection and does not allow us to consult the spells.";
	nextSpellButton.innerText = "Try again";
	element.replaceChildren(spellName, spellDescription, nextSpellButton);
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const HarryPotterApp = async (DOMElement) => {
	element = DOMElement;
	document.querySelector("#app-title").innerHTML = "Harry Potter Spells";
	element.innerHTML = "Loading...";

	spellName = document.createElement("h3");
	spellDescription = document.createElement("blockquote");
	nextSpellButton = document.createElement("a");
	nextSpellButton.classList.add("next-spell-button");

	nextSpellButton.innerText = "Next Spell";

	const renderSpell = (spell) => {
		spellName.innerHTML = spell.name;
		spellDescription.innerHTML = spell.description;
		element.replaceChildren(spellName, spellDescription, nextSpellButton);
	};

	nextSpellButton.addEventListener("click", async () => {
		element.innerHTML = "Loading...";

		const spell = await fetchSpell();
		renderSpell(spell);
	});

	fetchSpell().then(renderSpell);
};
