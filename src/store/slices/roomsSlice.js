import {createSlice} from '@reduxjs/toolkit';

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
  },
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload.rooms;
    },
  },
});

export const {setRooms} = roomsSlice.actions;

export default roomsSlice.reducer;
