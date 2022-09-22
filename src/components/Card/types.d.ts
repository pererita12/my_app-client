import { ConnectedProps } from "react-redux";
import { connector } from ".";
import { DigimonData } from "../../redux/reducers/digimonList";

interface Props extends ConnectedProps<typeof connector> {
  digimon: DigimonData;
}

interface State {
  //
}
