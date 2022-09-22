import { Component } from "react";
import { LEVELS } from "../../constants";
import styles from "./styles.module.scss";
import { Props, State } from "./types";

export default class Card extends Component<Props, State> {
  state: State = {
    //
  };

  getLevel = (): LEVELS => {
    const { digimon } = this.props;
    switch (digimon.level.toLowerCase()) {
      case "fresh": {
        return LEVELS.FRESH;
      }
      case "rookie": {
        return LEVELS.ROOKIE;
      }
      case "in_training": {
        return LEVELS.IN_TRAINING;
      }
      case "training": {
        return LEVELS.TRAINING;
      }
      case "armor": {
        return LEVELS.ARMOR;
      }
      case "champion": {
        return LEVELS.CHAMPION;
      }
      case "mega": {
        return LEVELS.MEGA;
      }
      case "ultimate": {
        return LEVELS.ULTIMATE;
      }
    }
    return LEVELS.FRESH;
  };

  render() {
    const { digimon } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.level}>{this.getLevel()}</div>
        <div className={styles.face}>
          <img className={styles.image} src={digimon.img} alt={digimon.name} />
        </div>
        <div className={styles.name}>{digimon.name}</div>
      </div>
    );
  }
}
