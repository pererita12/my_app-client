import styles from "./styles.module.scss";
import { Component } from "react";
import { Props } from "./types";
import { DigimonData } from "../../redux/reducers/digimonList";
import Tablero from "../Tablero";

export default class App extends Component<Props, {}> {
  componentDidMount() {
    this.getDigimon();
  }

  getDigimon = async () => {
    const { updateList } = this.props;
    const response = await fetch("http://localhost:4000/api/digimon");
    const json: Array<any> = await response.json();
    const data: Array<DigimonData> = json.map((o: any, index) => {
      return {
        ...o,
        index
      };
    });
    updateList(data);
  };

  render() {
    return (
      <div className={styles.root}>
        <Tablero />
      </div>
    );
  }
}
