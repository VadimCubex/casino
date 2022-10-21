import React from "react";
import classNames from "classnames";

import { Text } from "../Text";
import { TextVariants } from "../Text/constants";

import styles from "./Level.module.scss";

export const LevelComponent = ({ level, className }) => {
  const LevelClass = classNames(styles.level, className);

  return (
    <div className={LevelClass}>
      <div>
        <Text variant={TextVariants.subtitle_medium}>{level}</Text>
      </div>
    </div>
  );
};

LevelComponent.displayName = "Level";
