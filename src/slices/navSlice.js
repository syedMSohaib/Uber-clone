import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  recentTrips: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const {setOrigin, setDestination, setTravelTimeInformation} =
  navSlice.actions;

export const getOrigin = state => state.nav.origin;

export const getDestination = state => state.nav.destination;

export const getTravelTimeDestination = state =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
