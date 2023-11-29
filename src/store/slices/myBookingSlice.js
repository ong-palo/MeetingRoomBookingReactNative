import {createSlice} from '@reduxjs/toolkit';
import {BOOKINGS} from '../../data/data';

const myBookingSlice = createSlice({
  name: 'myBooking',
  initialState: {
    myBookings: BOOKINGS,
    cancelModalVisibility: false,
  },
  reducers: {
    setCancelModalVisibility: state => {
      state.cancelModalVisibility = !state.cancelModalVisibility;
    },
  },
});

export const {setCancelModalVisibility} = myBookingSlice.actions;

export default myBookingSlice.reducer;
