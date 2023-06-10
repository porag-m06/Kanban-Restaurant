const countCards = require('./homeFoodItemCounter.js');

test('Number of food items on the home page should be equal to 0 \nincase of no item on the AllSeafoods Item Array', () => {
  const allSeafoods = [];
  expect(countCards(allSeafoods)).toBe(0);
});

test('Number of food items on the home page should be equal to 5 (e.g.) \nincase there are 5 item on the AllSeafoods Item Array', () => {
  const allSeafoods = [
    {
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
      idMeal: '52959',
    },
    {
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
      idMeal: '52819',
    },
    {
      strMeal: 'Escovitch Fish',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1520084413.jpg',
      idMeal: '52944',
    },
    {
      strMeal: 'Fish fofos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg',
      idMeal: '53043',
    },
    {
      strMeal: 'Fish pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
      idMeal: '52802',
    }];

  expect(countCards(allSeafoods)).toBe(5);
});
