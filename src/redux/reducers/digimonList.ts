import { createReducer } from "@reduxjs/toolkit";
import { UpdateList } from "../actions";

export interface DigimonData {
  index: number;
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
}

const initialState: Array<DigimonData> = [];

const values = createReducer(initialState, (builder) => {
  builder.addCase(UpdateList, (state, action) => {
    return action.payload;
  });
});

export default values;
