import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

export const InputComponent = forwardRef(
  (
    {
      type,
      value,
      variant = "large",
      placeholder,
      rightSide,
      leftSide,
      hidden,
      onChange,
      onClick,
      className,
    },
    ref
  ) => {
    const InputClass = classNames(
      styles.input,
      {
        [styles["input_hidden"]]: hidden,
        [styles[`input_variant_${variant}`]]: variant,
      },
      className
    );

    return (
      <div className={InputClass}>
        {leftSide && <div>{leftSide || null}</div>}
        <input
          ref={ref}
          value={value}
          type={type ? type : "text"}
          placeholder={placeholder && placeholder}
          onClick={onClick}
          onChange={onChange}
        />
        {rightSide || null}
      </div>
    );
  }
);

InputComponent.displayName = "Input";
