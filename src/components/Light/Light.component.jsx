import React from "react";
import classNames from "classnames";

import styles from "./Light.module.scss";

export const LightComponent = ({ width, color, position, className }) => {
  const LightClass = classNames(
    styles.light,
    {
      [styles[`light_width_${width}`]]: width,
      [styles[`light_color_${color}`]]: color,
      [styles[`light_position_${position}`]]: position,
    },
    className
  );

  return (
    <div className={LightClass}>
      <div className={styles.circle3}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle1}></div>
      <div className={styles.main}></div>
    </div>
  );
};

LightComponent.displayName = "Light";
