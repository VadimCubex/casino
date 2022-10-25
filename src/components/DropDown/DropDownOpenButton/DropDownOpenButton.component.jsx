import React from "react";
import classNames from "classnames";

import { SvgIcon } from "../../SvgIcon";
import { Icons } from "../../SvgIcon/constants";

import styles from "../DropDown.module.scss";

export const DropDownOpenButtonComponent = ({ isOpen, onClick }) => {
  const DropDownOpenClass = classNames(styles.dropDown_open_button, {
    active: isOpen,
  });

  return (
    <div className={DropDownOpenClass} onClick={onClick}>
      <SvgIcon
        rotate={isOpen ? "180" : "0"}
        size={8}
        src={Icons.ArrowBottomStroke}
      />
    </div>
  );
};

DropDownOpenButtonComponent.displayName = "DropDownOpenButton";
