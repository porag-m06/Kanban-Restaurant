const getReservation = async (mealId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gu2Mtw1O5kzLsbGb8mGx/reservations?item_id=${mealId}`);
  const jsonData = await response.json();
  return jsonData;
};

const addReservation = async (mealId, username, startDate, endDate) => {
  console.log('ADDING RESERVATION : ', mealId, username, startDate, endDate);
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gu2Mtw1O5kzLsbGb8mGx/reservations',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: mealId,
        username,
        date_start: startDate,
        date_end: endDate,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  console.log('RESERVATION ADDED!');
};

// getReservation(52944);
// addReservation("52944", "MD55", "2023-10-18", "2023-10-18")
export { getReservation, addReservation };