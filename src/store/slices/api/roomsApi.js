import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const roomsApi = createApi({
  reducerPath: 'roomsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  endpoints: builder => ({
    getRooms: builder.query({
      query: () => 'rooms',
    }),
  }),
});

export const {useGetRoomsQuery} = roomsApi;
