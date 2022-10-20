import React from "react";
import { useState } from "react";
import classNames from "classnames";

import { Languages } from "./constants";
import { DropDown } from "../DropDown";
import { SvgIcon } from "../SvgIcon";
import { ArrowBottomStroke, ColorSvgVariants } from "../SvgIcon/constants";
import { Text } from "../Text";
import { TextVariants } from "../Text/constants";

import styles from "./Language.module.scss";

export const LanguageComponent = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const LanguageClass = classNames(styles.language, className);
  const [language, setLanguage] = useState(Languages[0]);

  const handleClickItem = (item) => {
    setIsOpen(false);
    setLanguage(item);
  };

  return (
    <div className={LanguageClass}>
      <div onClick={() => setIsOpen(!isOpen)} className={styles.title}>
        <Text variant={TextVariants.h5}>{language}</Text>
        <SvgIcon
          size={7}
          src={ArrowBottomStroke}
          color={ColorSvgVariants.white}
          rotate={isOpen ? "180" : "0"}
        />
      </div>
      <DropDown className={styles.lag_dropdown} isOpen={isOpen}>
        {Languages.map(
          (item) =>
            language !== item && (
              <div
                className={styles.lag_item}
                onClick={() => handleClickItem(item)}
                key={item}
              >
                <Text variant={TextVariants.h5_regular}>{item}</Text>
              </div>
            )
        )}
      </DropDown>
    </div>
  );
};

LanguageComponent.displayName = "Language";
