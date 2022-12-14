import Component from "./Component";
import { connect } from "react-redux";
import { RootState, AppDispatch } from "../../redux";

export const connector = connect(
  (store: RootState) => {
    return {
      digimonList: store.digimonList
    };
  },
  (dispatch: AppDispatch) => {
    return {};
  }
);

export default connector(Component);
