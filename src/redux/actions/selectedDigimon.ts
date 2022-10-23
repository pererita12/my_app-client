import { createAction } from "@reduxjs/toolkit";
import { DigimonData } from "../reducers/digimonList";

export const SelectDigimon = createAction<DigimonData>('SELECT_DIGIMON');
export const DeselectDigimon = createAction<DigimonData>('DESELECT_DIGIMON');