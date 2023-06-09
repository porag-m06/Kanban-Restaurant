import './style.css';
import getAllSeaFoodMeals from './modules/meals.js';
import {addLikeOnEvent} from './modules/cardlikes.js'

import logo from '../assets/logo-kan.png';
import getItem from './modules/reservation.js';

const logoImg = document.querySelector('.logo');
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

const setEventForReservation = (btnReserve, mealId) => {
  btnReserve.addEventListener('click', (e) => {
    if (e.target.classList.contains('reserve')) {
      getItem(mealId);
    }
  });
};

const showCards = (foodArray) => {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  for (let index = 0; index < foodArray.length; index += 1) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('flex', 'card');
    cardDiv.innerHTML = `<h1>${foodArray[index].strMeal}</h1>
               <h6>ID: ${foodArray[index].idMeal}</h6>
               <img src="${foodArray[index].strMealThumb}" alt="" >
               <div class="likes flex">
               <img class="like-img img${index}" src="" alt="">
               <h4><span id = "s${index}">0</span> likes</h4>
               </div>
               <button class="comment">Comments</button>
               <button class="reserve reserve${index}">Reservations</button>
               `;
    container.appendChild(cardDiv);
    const btnReserve = document.querySelector(`.reserve${index}`);
    setEventForReservation(btnReserve, foodArray[index].idMeal);

    const likeImg = document.querySelector(`.img${index}`);
    likeImg.src = like;
    addLikeOnEvent(likeImg,foodArray[index].idMeal)
  }
};

setTimeout(() => {
  if (allSeafoods.length) {
    showCards(allSeafoods);
  } else {
    /* eslint-disable */
		console.log("No data found while fetching for meal list!!!");
		/* eslint-enable */
    document.querySelector('.container').textContent = 'Error getting data from server! Please reload.';
  }
}, 2000);
