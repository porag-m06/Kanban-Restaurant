import { getReservation, addReservation } from './involvment.js';

const displayMeals = (meal, reservetionInfoArray) => {
  let content = '';
  content = `
		<div class="modal" id="item-modal">
         <div class="Reservation-modal">

            <div class="closeBtn">
                <img id="closeBtn" src="https://img.icons8.com/glyph-neue/64/delete-sign.png" alt="delete-sign" />
            </div>

            <div class="meal-container-order">
                <div class="img-container">
                    <img src=${meal.strMealThumb} class="item-img" alt="food-image" />
                </div>

                <h1 class="meal-title">${meal.strMeal}</h1>

                <div class="item-specification-container">
                    <ul class="item-specification">
                        <li class="item">Area:${meal.strArea}</li>
                        <li class="item">Category :${meal.strCategory}</li>
                    </ul>
                    <ul class="item-specification">
                        <li class="item">Ingredient:${meal.strIngredient8}</li>
                        <li class="item">Ingredient:${meal.strIngredient9}</li>
                    </ul>
                </div>
            </div>

            <div class="meal-container-order">
                <h2 class="meal-reservation">Reservation History <span class="meal-reservation-span"></span></h2>

                <div>
                    <ul class="order-list-${meal.idMeal}">
                    <li class="item">05/06/2023 - 09/06/2023 by miki</li>
                    </ul>
                </div>
                
                <h3 class="add-reservation">Add a reservation</h3>
                <form class="order-form">
                    <input type="text" class="form-control" id="userName" placeholder="Your name" required />
                    <input type="date" class="form-control" id="start-date" placeholder="Start date" required />
                    <input type="date" class="form-control" id="end-date" placeholder="End date" required />
                    <input type="submit" class="btnReserve" id="btnReserve" value="Reserve" />
                </form>

            </div>
         </div>
        </div>`;

  document.querySelector('.reservation-popup').innerHTML = content;

  //Adding reservation history count
  document.querySelector('.meal-reservation-span').innerHTML = reservetionInfoArray.length;

  // Adding reservation history to the modal
  const reservationUl = document.querySelector(`.order-list-${meal.idMeal}`);
  if (reservetionInfoArray.length) {
    reservetionInfoArray.forEach((reservation) => {
      const li = document.createElement('li');
      li.classList.add('item');
      li.innerHTML = `${reservation.date_start}  --  ${reservation.date_end}  By  ${reservation.username} `;
      reservationUl.appendChild(li);
    });
    console.log(reservationUl);
  }

  // close Modal
  document.querySelector('#closeBtn').addEventListener('click',()=>{
    document.querySelector('.Reservation-modal').style.display ="none";
  })

  // Adding reservation
  const reservationFrom = document.querySelector('.order-form');
  reservationFrom.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.querySelector('#userName').value;
    const startDate = document.querySelector('#start-date').value;
    const endDate = document.querySelector('#end-date').value;
    console.log('#######', meal.idMeal, userName, startDate, endDate);
    addReservation(meal.idMeal, userName, startDate, endDate);
    reservationFrom.reset();
  });

};//displayMeals

const getItem = async (mealId) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
  );
  const data = await response.json();
  console.log('\n\nDisplay Meal: ----->', data.meals);
  const reservetionInfoArray = await getReservation(data.meals[0].idMeal);
  displayMeals(data.meals[0], reservetionInfoArray);
};

export default getItem;
