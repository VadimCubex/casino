import React from "react";
import classNames from "classnames";

import { TextVariants } from "../../constants/VariantsOfComponents";
import { Text } from "../Text";

import styles from "./Checkbox.module.scss";

export const CheckboxComponent = ({ text, onChange, value, className }) => {
  const CheckboxClass = classNames(styles.checkbox, className);

  return (
    <div className={CheckboxClass}>
      <input type="checkbox" onChange={() => {}} checked={value} />
      <label onClick={onChange}>
        <div>
          <span className={styles.border}>
            <span className={styles.dot}></span>
          </span>
        </div>
        {text && <Text variant={TextVariants.h5_regular}>{text}</Text>}
      </label>
    </div>
  );
};

CheckboxComponent.displayName = "Checkbox";
