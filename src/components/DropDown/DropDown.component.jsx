import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { debounce } from "../../helpers/helpers";

import styles from "./DropDown.module.scss";

export const DropDownComponent = ({
  isOpen,
  children,
  addToHeight,
  isInnerHeight,
  maxHeight,
  className,
}) => {
  const DropDownClass = classNames(
    styles.dropDown,
    {
      active: isOpen,
    },
    className
  );

  const [height, setHeight] = useState(0);
  const dropDown = useRef(null);

  const selectHeight = () => {
    if (isOpen) {
      if (maxHeight) {
        return maxHeight;
      } else {
        return height;
      }
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const updateSize = () => {
      const add = addToHeight ? addToHeight : 190;
      setHeight(
        isInnerHeight
          ? window.innerHeight - 64
          : dropDown.current.offsetHeight + add
      );
    };
    updateSize();
    const DropDownUpdateSize = debounce(updateSize, 500);

    window.addEventListener("resize", DropDownUpdateSize, true);

    return () => {
      window.removeEventListener("resize", DropDownUpdateSize, true);
    };
  }, []);

  return (
    <div style={{ maxHeight: `${selectHeight()}px` }} className={DropDownClass}>
      <div ref={dropDown} className={styles.children}>
        {children}
      </div>
    </div>
  );
};

DropDownComponent.displayName = "DropDown";
