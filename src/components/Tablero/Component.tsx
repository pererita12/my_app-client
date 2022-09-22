import { Component } from "react";
import styles from "./styles.module.scss";
import { Props, State } from "./types";
import Card from "../Card";

export default class Tablero extends Component<Props, State> {
  state: State = {
    //
  };

  render() {
    return (
      <div className={styles.root}>
        {this.props.digimonList.map((digimon) => {
          return <Card digimon={digimon} />;
        })}
      </div>
    );
  }
}
