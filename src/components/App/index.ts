import Component from "./Component";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { UpdateList } from "../../redux/actions";
import { DigimonData } from "../../redux/reducers/digimonList";

export const connector = connect(
  (store: RootState) => {
    return {};
  },
  (dispatch: AppDispatch) => {
    return {
      updateList: (payload: Array<DigimonData>) => {
        dispatch(UpdateList(payload));
      }
    };
  }
);

export default connector(Component);
