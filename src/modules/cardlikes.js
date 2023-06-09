const getLikes = async ()=>{
	const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gu2Mtw1O5kzLsbGb8mGx/likes`);
	const jsonData = await response.json();
    console.log(jsonData);
	//return jsonData;
}

const addLikes = async (mealId) => {
	console.log("ADDING Likes : ",mealId);
	const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gu2Mtw1O5kzLsbGb8mGx/likes`,
		{
			method: 'POST',
			body: JSON.stringify({
				"item_id": mealId
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		}
	);
    console.log(response);
	console.log(response.status,response.statusText,"Like ADDED!");
	return response.status;
};

const addLikeOnEvent = (likeImgAsBtn, MealId )=>{
    likeImgAsBtn.addEventListener('click',()=>{
        console.log("IMG: ", likeImgAsBtn,"with id: ",MealId," is clicked!!!");
        (async()=>{
            try {
                addLikes(MealId);
            } catch (error) {
                
            }
        })()
        
    })

}

addLikes(52944);
//getLikes()

//export {getLikes,addLikes,addLikeOnEvent};