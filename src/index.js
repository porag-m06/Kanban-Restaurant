import "./style.css";
import getAllSeaFoodMeals from "./meals.js";
import logo from "../assets/logo-kan.png";
import getItem from "./modules/reservation2";

const logoImg = document.querySelector(".logo");
logoImg.src = logo;

let allSeafoods = [];
(async () => {
	try {
		allSeafoods = await getAllSeaFoodMeals();
	} catch (error) {
		/* eslint-disable */
		console.error(error.message);
		/* eslint-enable */
	}
})();

const showCards = (foodArray) => {
	const container = document.querySelector(".container");
	container.innerHTML = "";

	for (let index = 1; index < foodArray.length; index += 1) {
		const cardDiv = document.createElement("div");
		cardDiv.classList.add("flex", "card");
		cardDiv.innerHTML = `<h1>${foodArray[index].strMeal}</h1>
               <h6>ID: ${foodArray[index].idMeal}</h6>
               <img src="${foodArray[index].strMealThumb}" alt="" >
               <button class="comment">Comments</button>
               <button class="reserve reserve${index}">Reservations</button>
               `;
		container.appendChild(cardDiv);
		const btnReserve = document.querySelector(`.reserve${index}`); 
		setEventForReservation(btnReserve,foodArray[index].idMeal);
	}
};

setTimeout(() => {
	if (allSeafoods.length) {
		showCards(allSeafoods);
	} else {
		/* eslint-disable */
		console.log("No data found while fetching for meal list!!!");
		/* eslint-enable */
	}
}, 2000);

const setEventForReservation = (btnReserve,mealId) => {
	btnReserve.addEventListener("click", (e) => {
		console.log("R Clicked");
		if (e.target.classList.contains("reserve")) {
			// modal.style.display = "block";
			getItem(mealId);
		}
	});
};