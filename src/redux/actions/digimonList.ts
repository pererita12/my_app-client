import { createAction } from "@reduxjs/toolkit";
import { DigimonData } from "../reducers/digimonList";

export const UpdateList = createAction<Array<DigimonData>>("UPDATE_LIST");
