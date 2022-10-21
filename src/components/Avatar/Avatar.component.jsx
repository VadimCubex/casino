import React from "react";
import classNames from "classnames";

import { Level } from "../Level";

import styles from "./Avatar.module.scss";

export const AvatarComponent = React.forwardRef(
  ({ variant, level, isLight, src, className }, ref) => {
    const AvatarClass = classNames(
      styles.avatar,
      {
        [styles[`avatar_variant_${variant}`]]: variant,
      },
      className
    );
    const AvatarLight = classNames(styles.avatar_light, {
      [styles[`avatar_variant_${variant}`]]: variant,
    });

    return (
      <div className={styles.avatar_container}>
        {isLight && (
          <div
            className={AvatarLight}
            style={src ? { backgroundImage: `url(${src})` } : {}}
          ></div>
        )}
        <div
          ref={ref}
          className={AvatarClass}
          style={src ? { backgroundImage: `url(${src})` } : {}}
        ></div>
        {level && <Level level={level} />}
      </div>
    );
  }
);

AvatarComponent.displayName = "Avatar";
