import {createSlice} from '@reduxjs/toolkit';

const newBookingSlice = createSlice({
  name: 'newBooking',
  initialState: {
    guests: 0,
    date: '',
    startTime: '',
    endTime: '',
  },
  reducers: {
    increaseGuests: state => {
      state.guests = state.guests + 1;
    },
    decreasesGuests: state => {
      if (state.guests !== 0) {
        state.guests = state.guests - 1;
      }
    },
    setDate: (state, action) => {
      state.date = action.payload.date;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload.startTime;
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload.endTime;
    },
  },
});

export const {
  increaseGuests,
  decreasesGuests,
  setDate,
  setStartTime,
  setEndTime,
} = newBookingSlice.actions;

export default newBookingSlice.reducer;
