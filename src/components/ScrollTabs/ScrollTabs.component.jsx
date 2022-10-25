import React, { useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";

import { ScrollSizeVariants } from "./constants";
import { Text } from "../Text";
import { TextVariants } from "../Text/constants";

import styles from "./ScrollTabs.module.scss";

export const ScrollTabsComponent = ({
  variant,
  isLight,
  size = "md",
  options,
  className,
}) => {
  const ScrollTabsClass = classNames(styles.scroll_tabs);
  const scrollContainerClass = classNames(styles.scroll_container, {
    [styles[`scroll_container_size_${size}`]]: size,
  });
  const scrollClass = classNames(
    styles.scroll,
    {
      [styles[`scroll_variant_${variant}`]]: variant,
    },
    className
  );

  const [selected, setSelected] = useState(0);
  const ScrollRef = useRef(null);
  const TabsOptons = useRef([]);

  const TextVariantMap = {
    [ScrollSizeVariants.extra_large]: TextVariants.h1,
    [ScrollSizeVariants.large]: TextVariants.h4,
    [ScrollSizeVariants.medium]: TextVariants.h4,
    [ScrollSizeVariants.small]: TextVariants.h5,
  };

  useLayoutEffect(() => {
    ScrollRef.current.style.left = `${TabsOptons.current[selected].offsetLeft}px`;
    ScrollRef.current.style.width = `${TabsOptons.current[selected].offsetWidth}px`;
  }, [selected]);

  return (
    <div className={ScrollTabsClass}>
      <div ref={ScrollRef} className={scrollContainerClass}>
        {isLight && <div className={scrollClass + " " + styles.light}></div>}
        <div className={scrollClass} />
      </div>
      {options.map((text, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          ref={(element) => (TabsOptons.current[index] = element)}
          className={styles.tab}
        >
          <Text variant={TextVariantMap[size]}>{text}</Text>
        </div>
      ))}
    </div>
  );
};

ScrollTabsComponent.displayName = "ScrollTabs";
