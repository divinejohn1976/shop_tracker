import getDate from "./utils/getDate.js";
import addComa from "./utils/addComa.js";

const addItemForm = document.getElementById("addItem");
const itemName = document.getElementById("itemName");
const itemQuantity = document.getElementById("itemQuantity");
const itemPrice = document.getElementById("itemPrice");
const priceText = document.getElementById("priceText");
const addButton = document.getElementById("addButton");

// const getRandom = (list) => {
// 	const randomNumber = Math.floor(Math.random() * list.length);
// 	return list[randomNumber];
// };

document.addEventListener("DOMContentLoaded", () => {
	// itemName.setAttribute(
	// 	"placeholder",
	// 	getRandom(["Pizza", "Chocolate", "Milk", "Bread", "Battery"])
	// );
	addButton.classList.add("disabled");

	// itemQuantity.setAttribute("placeholder", getRandom([6, 10, 12, 180, 9]));

	itemName.addEventListener("input", (e) => {
		if (itemPrice.value && itemQuantity.value && e.target.value) {
			priceText.textContent = `${addComa(itemQuantity.value)} ${itemName.value} cost $${addComa(
				Number.parseFloat(itemQuantity.value) * Number.parseFloat(itemPrice.value)
			)}`;
			addButton.disabled = false;

			addButton.classList.remove("disabled");
		} else {
			addButton.disabled = true;
			addButton.classList.add("disabled");
		}
	});

	itemQuantity.addEventListener("input", (e) => {
		if (itemName.value && itemPrice.value && e.target.value) {
			priceText.textContent = `${addComa(itemQuantity.value)} ${itemName.value} cost $${addComa(
				Number.parseFloat(itemQuantity.value) * Number.parseFloat(itemPrice.value)
			)}`;
			addButton.disabled = false;

			addButton.classList.remove("disabled");
		} else {
			addButton.disabled = true;
			addButton.classList.add("disabled");
		}
	});

	itemPrice.addEventListener("input", (e) => {
		if (itemName.value && itemQuantity.value && e.target.value) {
			priceText.textContent = `${addComa(itemQuantity.value)} ${itemName.value} cost $${addComa(
				Number.parseFloat(itemQuantity.value) * Number.parseFloat(itemPrice.value)
			)}`;
			addButton.disabled = false;

			addButton.classList.remove("disabled");
		} else {
			addButton.disabled = true;
			addButton.classList.add("disabled");
		}
	});
});

const lSS = "Grocery Items";

const allItems = localStorage.getItem(lSS) === null ? [] : JSON.parse(localStorage.getItem(lSS));

console.log(allItems);

addItemForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let fullItem = [...allItems];
	let id;

	if (fullItem.length) {
		id = fullItem[fullItem.length - 1].id + 1;
	} else {
		id = 0;
	}
	const addedData = {
		purchased: false,
		date: getDate(),
		id,
		name: itemName.value,
		price: Number.parseFloat(itemPrice.value),
		quantity: Number.parseFloat(itemQuantity.value),
		cost: Number.parseFloat(itemQuantity.value) * Number.parseFloat(itemPrice.value),
		edited: false
	};

	const items = [...fullItem, addedData];

	localStorage.setItem(lSS, JSON.stringify(items));

	location.assign("../index.html");
});
