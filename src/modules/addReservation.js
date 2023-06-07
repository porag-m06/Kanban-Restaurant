/** @format */

const user = document.querySelector("#userName");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const app_id="l7B8OMnF05i23EvIkgyn"
const getres = async (app_id,id) => {
	const response = await fetch(
		`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${app_id}/reservations?item_id=${id}`
	);
	const data = await response.json();
	return data;
};
console.log(getres());

const addReservation = async (app_id, item_id) => {
	const response = await fetch(
		`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi//apps/${app_id}/reservations/`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				"Access-Control-Allow-Methods": "POST",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
			body: JSON.stringify({
				item_id: item_id,
				username: user.value,
				date_start: startDate.value,
				date_end: endDate.value,
			}),
		}
	);
const result = response.json()
console.log(result)

};


// const displayOrder = async (orderId) => {
// 	let div = document.createElement("div");
// 	mealArray.forEach((meal) => {
// 		console.log(meal);

// 		div.innerHTML = `
// 		 <h2>Reservation count}</h2>
// 		 <div>
// 			 <ul class="order-list">
// 				 <li class="item">05/06/2023 - 09/06/2023 by miki</li>
// 				 <li class="item">05/06/2023 - 09/06/2023 by herriye</li>
// 			 </ul>
// 		 </div>
// 		 <h3>Add a reservation</h3>
// 		 <form class="order-form">
// 			 <input
// 				 type="text"
// 				 class="form-control"
// 				 id="userName"
// 				 placeholder="Your name"
// 				 required />
// 			 <input
// 				 type="date"
// 				 class="form-control"
// 				 id="start-date"
// 				 placeholder="Start date"
// 				 required />
// 			 <input
// 				 type="date"
// 				 class="form-control"
// 				 id="end-date"
// 				 placeholder="End date"
// 				 required />
// 			 <input
// 				 type="submit"
// 				 class="btnReserve"
// 				 id="btnReserve"
// 				 value="Reserve" />
// 		 </form> -->

//     `;
// 	});
// };

// export { getReservation};
