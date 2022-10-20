import React from "react";
import classNames from "classnames";

import styles from "./Avatar.module.scss";

export const AvatarComponent = React.forwardRef(
  ({ variant, isLight, src, className }, ref) => {
    const AvatarClass = classNames(
      styles.avatar,
      {
        [styles[`avatar_variant_${variant}`]]: variant,
      },
      className
    );

    return (
      <div className={styles.avatar_container}>
        {isLight && (
          <div
            className={styles.avatar_light}
            style={src ? { backgroundImage: `url(${src})` } : {}}
          ></div>
        )}
        <div
          ref={ref}
          className={AvatarClass}
          style={src ? { backgroundImage: `url(${src})` } : {}}
        ></div>
      </div>
    );
  }
);

AvatarComponent.displayName = "Avatar";
