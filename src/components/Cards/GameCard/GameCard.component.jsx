import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { Text } from "../../Text";
import { TextVariants } from "../../Text/constants";

import styles from "./GameCard.module.scss";

export const GameCardComponent = ({ item, className }) => {
  const navigate = useNavigate();
  const GameCardClass = classNames(styles.gameCard, className);

  const handleClick = () => {
    navigate(item.link);
  };

  return (
    <div
      style={{ backgroundImage: `url(${item.img})` }}
      onClick={handleClick}
      className={GameCardClass}
    >
      <div className={styles.shadow}>
        <Text variant={TextVariants.smallTitle}>{item.name}</Text>
      </div>
    </div>
  );
};

GameCardComponent.displayName = "GameCard";
