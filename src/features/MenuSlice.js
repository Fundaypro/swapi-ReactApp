import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    characters: 1,
    maxCharacters : 15,
    planets: 1,
    maxPlanets : 14,
    contentWindow: 1,
  },
  reducers: {
    nextCharacter(state) {
      state.characters = state.characters < state.maxCharacters ? state.characters+1 : 1 ;
    },
    prevCharacter(state) {
      state.characters = state.characters === 1 ? state.maxCharacters : state.characters-1;
    },
    nextPlanet(state) {
        state.planets = state.planets < state.maxPlanets ? state.planets+1 : 1 ;
    },
    prevPlanets(state) {
        state.planets = state.planets === 1 ? state.maxPlanets : state.planets-1 ;
    },
    changeWindow(state,num) {
      state.contentWindow = num.payload
    },
  },
});

export const {nextCharacter , nextPlanet , prevCharacter , prevPlanets , changeWindow} = menuSlice.actions;

export default menuSlice.reducer;
