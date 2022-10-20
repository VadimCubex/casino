import React from "react";
import classNames from "classnames";

import { Default } from "./Default";
import { SelectOptionVariants } from "../constants";

export const SelectOptionComponent = ({
  value,
  onClick,
  selected,
  variant,
  className,
}) => {
  const SelectOptionClass = classNames(
    "selectOption",
    "cursor-pointer",
    className
  );

  const OptionVariantMap = {
    [SelectOptionVariants.Default]: (
      <Default
        className={!selected && "selectOption-padding-y-10"}
        value={value}
      />
    ),
  };

  return (
    <div onClick={onClick} className={SelectOptionClass}>
      {!selected && <hr className="separator" />}
      {OptionVariantMap[variant]}
    </div>
  );
};

SelectOptionComponent.displayName = "SelectOption";
