const getReservation = async (mealId)=>{
	const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gu2Mtw1O5kzLsbGb8mGx/reservations?item_id=${mealId}`);
	const jsonData = await response.json();
	console.log(jsonData);
	return jsonData;
}

//getReservation(52944);
export {getReservation};