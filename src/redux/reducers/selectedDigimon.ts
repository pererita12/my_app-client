import { createReducer } from "@reduxjs/toolkit";
import { DeselectDigimon, SelectDigimon } from "../actions";
import { DigimonData } from "./digimonList";

const initialState: Array<DigimonData> = [];

export default createReducer(initialState, (builder) => {
  builder
    .addCase(SelectDigimon, (state, action) => {
      state.push(action.payload);
    })
    .addCase(DeselectDigimon, (state, action) => {
      return state.filter((o) => o.id !== action.payload.id);
    });
});
