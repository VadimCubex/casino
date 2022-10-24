import React from "react";
import classNames from "classnames";

import { ButtonSizeVariants, ButtonVariants } from "./constants";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";
import { TextVariants } from "../Text/constants";

import styles from "./Button.module.scss";

export const ButtonComponent = ({
  text,
  id,
  variant,
  isLight,
  size = "md",
  width = "content",
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  disabled,
  style,
  className,
}) => {
  const buttonClass = classNames(
    styles.button,
    {
      [styles[`button_variant_${variant}`]]: variant,
      [styles[`button_size_${size}`]]: size,
      [styles[`button_icon_position_${iconPosition}`]]: iconPosition,
      [styles.disabled]: disabled,
    },
    className
  );
  const containerClass = classNames(styles.btn_container, {
    [styles[`btn_container_width_${width}`]]: width,
  });

  const TextVariantMap = {
    [ButtonSizeVariants.extra_large]: TextVariants.h1,
    [ButtonSizeVariants.large]: TextVariants.h4,
    [ButtonSizeVariants.medium]: TextVariants.h4,
    [ButtonSizeVariants.small]: TextVariants.h5,
  };

  return (
    <div className={containerClass}>
      {isLight && !disabled && (
        <div className={buttonClass + " " + styles.light}></div>
      )}
      <button
        className={buttonClass}
        disabled={disabled}
        onClick={disabled ? () => null : onClick}
        style={style}
        type={type}
        id={id}
      >
        <div>
          {icon && (
            <SvgIcon
              src={icon}
              size={variant === ButtonVariants.crypto ? 34 : 24}
            />
          )}
          {text && <Text variant={TextVariantMap[size]}>{text}</Text>}
        </div>
      </button>
    </div>
  );
};

ButtonComponent.displayName = "Button";
