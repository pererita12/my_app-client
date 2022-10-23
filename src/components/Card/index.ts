import Component from "./Component";
import { connect } from "react-redux";
import { RootState, AppDispatch } from "../../redux";
import { DigimonData } from "../../redux/reducers/digimonList";
import { DeselectDigimon, SelectDigimon } from "../../redux/actions";
import { OwnProps } from "./types";

export const connector = connect(
  (store: RootState, ownProps: OwnProps) => {
    let isSelected = false;
    for (const digimon of store.selectedDigimon) {
      if (digimon.id !== ownProps.digimon.id) continue;
      isSelected = true;
      break;
    }
    return {
      isSelected,
    };
  },
  (dispatch: AppDispatch) => {
    return {
      selectedDigimon: (digimon: DigimonData) => {
        dispatch(SelectDigimon(digimon));
      },
      deselectDigimon: (digimon: DigimonData) => {
        dispatch(DeselectDigimon(digimon));
      },
    };
  }
);

export default connector(Component);
