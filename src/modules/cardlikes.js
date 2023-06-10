const getLikes = async (MealId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kk29kSc7pTGrSuCbL9JI/likes');
  const jsonDataLikesArray = await response.json();
  const targetcardObj = jsonDataLikesArray.find((element) => element.item_id === MealId);
  return targetcardObj.likes;
};

const populateCurrentLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kk29kSc7pTGrSuCbL9JI/likes');
  const jsonDataLikesArray = await response.json();
  jsonDataLikesArray.forEach((element) => {
    document.querySelector(`#s${element.item_id}`).innerText = element.likes;
  });
};

const addLikes = async (mealId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kk29kSc7pTGrSuCbL9JI/likes',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: mealId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  return response.status;
};

const addLikeOnEvent = (likeImgAsBtn, MealId) => {
  likeImgAsBtn.addEventListener('click', async () => {
    await addLikes(MealId);
    const numberOflikes = await getLikes(MealId);
    document.querySelector(`#s${MealId}`).innerText = numberOflikes;
  });
};
export { addLikeOnEvent, populateCurrentLikes };