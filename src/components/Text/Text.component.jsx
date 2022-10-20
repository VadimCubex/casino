import React from "react";
import classNames from "classnames";

import styles from "./Text.module.scss";

export const TextComponent = ({ variant, className, children }) => {
  const TextClass = classNames(
    styles.text,
    {
      [styles[`text_variant_${variant}`]]: variant,
    },
    className
  );

  return <span className={TextClass}>{children}</span>;
};

TextComponent.displayName = "Text";
