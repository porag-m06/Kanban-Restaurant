import './style.css';
import getAllSeaFoodMeals from './modules/meals.js';
import { addLikeOnEvent, populateCurrentLikes } from './modules/cardlikes.js';
import logo from '../assets/logo-kan.png';
import like from '../assets/like2.png';
import getItem from './modules/reservation.js';

const logoImg = document.querySelector('.logo');
logoImg.src = logo;

let allSeafoods = [];

(async () => {
  allSeafoods = await getAllSeaFoodMeals();
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
    cardDiv.innerHTML = `<h6>${foodArray[index].idMeal}</h6>
               <img src="${foodArray[index].strMealThumb}" alt="food image" >
               <div class="flex name-likes">
                  <h1>${foodArray[index].strMeal}</h1>

                  <div class="flex likes">
                  <img class="like-img img${index}" src="" alt="like image">
                  <h4><span id = "s${foodArray[index].idMeal}">0</span> likes</h4>
                  </div>

               </div>

                <button class="comment">Comments</button>
                <button class="reserve reserve${index}">Reservations</button>`;
    container.appendChild(cardDiv);
    const btnReserve = document.querySelector(`.reserve${index}`);
    setEventForReservation(btnReserve, foodArray[index].idMeal);

    const likeImgAsBtn = document.querySelector(`.img${index}`);
    likeImgAsBtn.src = like;

    addLikeOnEvent(likeImgAsBtn, foodArray[index].idMeal);
  }
  populateCurrentLikes();
};

setTimeout(() => {
  if (allSeafoods.length) {
    showCards(allSeafoods);
    document.querySelector('#m-item').innerText = allSeafoods.length;
  } else {
    document.querySelector('.container').textContent = 'Error getting data from the server! Check your internet connection & reload Please...';
  }
}, 2000);
