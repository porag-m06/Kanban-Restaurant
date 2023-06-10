// import { reservationCounter } from './reservationCounter.js';
const reservationCounter = require('./reservationCounter.js');

const reserve = [
  {
    item_id: 'item1',
    username: 'Jane',
    date_start: '2020-10-15',
    date_end: '2020-10-16',
  },
  {
    item_id: 'item2',
    date_start: '2022-10-15',
    date_end: '2023-06-9',
    username: 'miki',
  },
];

describe('Reservation details', () => {
  test('The count reservation should be 2', () => {
    const reserveNumber = reservationCounter(reserve);
    expect(reserveNumber).toBe(2);
  });
});
