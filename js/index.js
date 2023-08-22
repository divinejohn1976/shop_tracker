import getDate from "./utils/getDate.js";
import addComa from "./utils/addComa.js";

const itemContainer = document.getElementById("item__container");

add.onclick = () => {
	location.assign("/views/add.html");
};

const lSS = "Grocery Items";

const listItems = localStorage.getItem(lSS) === null ? [] : JSON.parse(localStorage.getItem(lSS));

document.addEventListener("DOMContentLoaded", () => {
	initApp();
});

const initApp = () => {
	for (let i = 0; i < listItems.length; i++) {
		let itemDiv = document.createElement("div");
		itemDiv.classList.add("item");
		let item = listItems[i];
		itemDiv.classList.add(`${item.purchased ? "purchased" : "notPurchased"}`);

		itemDiv.innerHTML = `
		<div class="divided">
		<div>
		<p class="itemName">${item.name}</p>
		<p class="itemQuantity">Quantity: ${addComa(item.quantity)}</p>
		<p class="itemPrice">Cost Per Unit: $${addComa(item.price)}</p>
		<p class="itemCost">Total Cost: $${addComa(item.cost)}</p>
		<span class="date">Added: ${item.date}</span><br />
		<button class="deleteBtn" onclick="deleteItem(${item.id})">Remove</button>
		</div>
		<input class="checkbox" type="checkbox" ${item.purchased ? "checked" : ""} onchange="updateStatus(${
			item.id
		})" />
		</div>
		
		

		`;

		itemContainer.appendChild(itemDiv);
	}
};

const totalContainer = document.getElementById("total__container");
const totalParagraph = document.createElement("p");
totalContainer.appendChild(totalParagraph);

const evt = () => {
	let localSL = localStorage.getItem(lSS) === null ? [] : JSON.parse(localStorage.getItem(lSS));
	if (localSL.length) {
		let totalAmount = 0;

		for (let i = 0; i < localSL.length; i++) {
			totalAmount += localSL[i].cost;
		}

		let totalPurchased = localSL.reduce((prev, curr) => {
			if (curr.purchased) {
				return (prev += curr.cost);
			} else {
				return prev;
			}
		}, 0);

		let totalNotPurchased = localSL.reduce((prev, curr) => {
			if (!curr.purchased) {
				return (prev += curr.cost);
			} else {
				return prev;
			}
		}, 0);

		totalParagraph.innerHTML = `

		<p class="totalNotPurchased totalAmount"><b>Amount Required:</b> $${addComa(totalNotPurchased)}</p>
		<p class="totalPurchased totalAmount"><b>Amount Spent:</b> $${addComa(totalPurchased)}</p>
		<p class="allTotal totalAmount"><b>Total Cost</b>: $${addComa(totalAmount)}</p>
		
		`;
	}
};

document.addEventListener("load", evt, true);
