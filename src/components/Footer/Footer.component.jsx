import React from "react";
import classNames from "classnames";

import styles from "./Footer.module.scss";

export const FooterComponent = ({ className }) => {
  const FooterClass = classNames(styles.footer, className);

  return <footer className={FooterClass}></footer>;
};

FooterComponent.displayName = "Footer";
