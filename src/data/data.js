import Booking from '../model/booking';

export const BOOKINGS = [
  new Booking(1, 'AAA', 'reserved', 'AAA', 10, Date.now(), Date.now()).toJSON(),
  new Booking(2, 'AAA', 'reserved', 'AAB', 10, Date.now(), Date.now()).toJSON(),
  new Booking(
    3,
    'AAA',
    'completed',
    'AAC',
    10,
    Date.now(),
    Date.now(),
  ).toJSON(),
  new Booking(
    4,
    'AAA',
    'completed',
    'AAD',
    10,
    Date.now(),
    Date.now(),
  ).toJSON(),
  new Booking(
    5,
    'AAA',
    'cancelled',
    'AAE',
    10,
    Date.now(),
    Date.now(),
  ).toJSON(),
];
