import { createReducer } from "@reduxjs/toolkit";
import { UpdateList } from "../actions";

export interface DigimonData {
  id: number;
  name: string;
  img: string;
  level:
    | "fresh"
    | "rookie"
    | "in_training"
    | "training"
    | "armor"
    | "champion"
    | "mega"
    | "ultimate";
  strength: number;
  speed: number;
  magic: number;
  health: number;
}

const initialState: Array<DigimonData> = [];

export default createReducer(initialState, (builder) => {
  builder.addCase(UpdateList, (state, action) => {
    return action.payload;
  });
});