/** @format */

import { getReservation } from "./addReservation.js";
//show
const reservation = "l7B8OMnF05i23EvIkgyn"
const displayMeals = async (mealArray) => {
	let content = "";
	
	mealArray.forEach((meal) => {
		content += `
		<div class="modal"> 
<div class="Reservation-modal">
				<div class="closeBtn">
					<img
						id="closeBtn"
						src="https://img.icons8.com/glyph-neue/64/delete-sign.png"
						alt="delete-sign" />
				</div>
				<div class="meal-container-order">
						<div class="img-container">
							<img src=${meal.strMealThumb} class="item-img" alt="food-image" />
						</div>

						<h1>Space 3</h1>

						<div class="item-specification-container">
							<ul class="item-specification">
								<li class="item">Name:${meal.strMeal}</li>
								<li class="item">Category :${meal.strCategory}</li>
							</ul>
							<ul class="item-specification">
								<li class="item">Ingredient:${meal.strIngredient7}</li>
								<li class="item">Ingredient:${meal.strIngredient9}</li>
							</ul>
						</div>
					</div>
				<div class="meal-container-order">
				<h2>Reservation count}</h2>
		 <div>
			 <ul class="order-list">
				 <li class="item">05/06/2023 - 09/06/2023 by miki</li>
				 <li class="item">05/06/2023 - 09/06/2023 by herriye</li>
			 </ul>
		 </div>
		 <h3>Add a reservation</h3>
		 <form class="order-form">
			 <input
				 type="text"
				 class="form-control"
				 id="userName"
				 placeholder="Your name"
				 required />
			 <input
				 type="date"
				 class="form-control"
				 id="start-date"
				 placeholder="Start date"
				 required />
			 <input
				 type="date"
				 class="form-control"
				 id="end-date"
				 placeholder="End date"
				 required />
			 <input
				 type="submit"
				 class="btnReserve"
				 id="btnReserve"
				 value="Reserve" />
		 </form> -->

				</div>
</div>
</div>`;
	// 	setTimeout(() => {
	// 		const orderContainer = document.querySelector(".meal-container-order");
	// 		orderContainer.innerHTML = `
	
	// `;
	// 	}, 30000);
	});

	document.body.innerHTML = content;
};

//getItem
// Note id will be passed from the button of reserveration

const getItem = async (mealId) => {
	const response = await fetch(
		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
	);
	const data = await response.json();
	// console.log(data.meals)
	displayMeals(data.meals);
};

// const openModal = () => {
// 	document.addEventListener("click", (e) => {
// 		if (e.target.classList.contains("Reservation-modal")) {
// 			const reservation = document.querySelector(".Reservation-modal");
// 			reservation.style.display = "block";
// 		}
// 	});
// };

// const closePopup = () => {
// 	document.addEventListener("click", (e) => {
// 		if (e.target.classList.contains("closeBtn")) {
// 			console.log(123);
// 			modal.style.display = "none";
// 		}
// 	});
// };

export default getItem;
