import {configureStore} from '@reduxjs/toolkit';
import myBookingReducer from './slices/myBookingSlice';
import roomsReducer from './slices/roomsSlice';
import {roomsApi} from './slices/api/roomsApi';
import newBookingReducer from './slices/newBookingSlice';

export const store = configureStore({
  reducer: {
    myBookings: myBookingReducer,
    [roomsApi.reducerPath]: roomsApi.reducer,
    rooms: roomsReducer,
    newBooking: newBookingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(roomsApi.middleware),
});
