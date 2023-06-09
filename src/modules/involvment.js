const reservationUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kk29kSc7pTGrSuCbL9JI/reservations';

const getReservation = async (mealId) => {
  const response = await fetch(`${reservationUrl}?item_id=${mealId}`);
  const jsonData = await response.json();
  return jsonData;
};

const addReservation = async (mealId, username, startDate, endDate) => {
  await fetch(reservationUrl,
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
};

export { getReservation, addReservation };
