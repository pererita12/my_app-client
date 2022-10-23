import { Component } from "react";
import { LEVELS } from "../../constants";
import styles from "./styles.module.scss";
import { Props, State } from "./types";
import { DigimonData } from "../../redux/reducers/digimonList";

export enum AttackType {
  STRENGTH = 0,
  MAGIC = 1,
  SPEED = 2,
}

export default class Card extends Component<Props, State> {
  state: State = {
    isSelected: false,
    isStrength: true,
    isMagic: false,
    isSpeed: false,
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

  onCardClick = (digimon: DigimonData) => {
    const { selectedDigimon, deselectDigimon, isSelected } = this.props;
    if (isSelected) {
      deselectDigimon(digimon)
      return;
    }
    selectedDigimon(digimon);
  };

  onAttackClick = (attack: AttackType) => {
    switch (attack) {
      case AttackType.SPEED: {
        this.setState({
          isSpeed: true,
          isMagic: false,
          isStrength: false,
        });
        break;
      }
      case AttackType.STRENGTH: {
        this.setState({
          isSpeed: false,
          isMagic: false,
          isStrength: true,
        });
        break;
      }
      case AttackType.MAGIC: {
        this.setState({
          isSpeed: false,
          isMagic: true,
          isStrength: false,
        });
        break;
      }
    }
  };

  getAttacks = (digimon: DigimonData) => {
    const { isSpeed, isStrength, isMagic, isSelected } = this.state;
    const arr = [
      {
        label: "Velocidad",
        type: AttackType.SPEED,
        value: digimon.speed,
        selected: isSpeed,
      },
      {
        label: "Fuerza",
        value: digimon.strength,
        type: AttackType.STRENGTH,
        selected: isStrength,
      },
      {
        label: "Magia",
        value: digimon.magic,
        type: AttackType.MAGIC,
        selected: isMagic,
      },
    ];
    if (isSelected) {
      return arr.map((o, index) => {
        return (
          <div
            key={index}
            className={styles.attack}
            data-selected={o.selected}
            onClick={() => {
              this.onAttackClick(o.type);
            }}
          >
            <span className={styles.letra}>{o.label}</span>
            <span className={styles.numero}>{o.value}</span>
          </div>
        );
      });
    }
    return arr.map((o, index) => {
      return (
        <div className={styles.attack} data-disabled={true} key={index}>
          <span className={styles.letra}>{o.label}</span>
          <span className={styles.numero}>{o.value}</span>
        </div>
      );
    });
  };

  render() {
    const { digimon, isSelected } = this.props;
    return (
      <div className={styles.root} data-rotated={isSelected}>
        <div className={styles.card}  data-rotated={isSelected}>
          <div className={styles.cardfront}>
            <div className={styles.level}>{this.getLevel()}</div>
            <div className={styles.face}>
              <img
                className={styles.image}
                src={digimon.img}
                alt={digimon.name}
              />
            </div>
            <div className={styles.name}>{digimon.name}</div>
          </div>
          <div className={styles.cardback}>
            <div>
              <div
                data-selected={isSelected}
                className={styles.selectorButton}
                onClick={() => {
                  this.onCardClick(digimon);
                }}
              />
            </div>
            <div className={styles.stats}>{this.getAttacks(digimon)}</div>
            <div className={styles.name}>{digimon.name}</div>
          </div>
        </div>
      </div>
    );
  }
}
