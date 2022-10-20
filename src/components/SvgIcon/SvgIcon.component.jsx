import React from "react";
import classNames from "classnames";
import { ReactSVG } from "react-svg";

import styles from "./SvgIcon.module.scss";

export const SvgIconComponent = ({
  src,
  size = 24,
  color = "inherit",
  rotate,
  className,
  style,
  isLight,
  onClick,
  onMouseMove,
  defaultStroke,
}) => {
  const svgIconClass = classNames(
    styles.svgIcon,
    {
      [styles[`svgIcon_rotate_${rotate}`]]: rotate,
      [styles["defaultStroke"]]: defaultStroke,
    },
    className
  );

  const stroke = defaultStroke ? {} : { stroke: `var(--${color})` };

  const customStyles = {
    width: `${size}px`,
    height: `${size}px`,
    ...style,
    ...stroke,
  };

  return (
    <div className={styles.svg_container}>
      <ReactSVG
        src={src}
        className={svgIconClass}
        onClick={onClick}
        onMouseMove={onMouseMove}
        style={customStyles}
      />
      {isLight && (
        <div className={styles.light}>
          <ReactSVG src={src} className={svgIconClass} />
        </div>
      )}
    </div>
  );
};

SvgIconComponent.displayName = "SvgIcon";
