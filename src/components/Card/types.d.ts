import { ConnectedProps } from "react-redux";
import { connector } from ".";
import { DigimonData } from "../../redux/reducers/digimonList";
export interface OwnProps {
  digimon: DigimonData;
}

export interface Props extends ConnectedProps<typeof connector>, OwnProps {
  //
}

export interface State {
  isSelected: boolean;
  isStrength: boolean;
  isMagic: boolean;
  isSpeed: boolean;
}
