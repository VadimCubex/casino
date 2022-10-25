import React from "react";
import { useState } from "react";
import classNames from "classnames";

import { Games, GamesColor } from "../../../../constants/constants";
import { Avatar } from "../../../Avatar";
import { AvatarVariants } from "../../../Avatar/constants";
import { Light } from "../../../Light";
import { LightColors } from "../../../Light/constants";
import { SvgIcon } from "../../../SvgIcon";
import { Icons } from "../../../SvgIcon/constants";
import { Text } from "../../../Text";
import { TextVariants } from "../../../Text/constants";

import styles from "./RowMain.module.scss";

const RowMain = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const TableRowClass = classNames(styles.table_row, {
    [styles.hover]: isHover,
  });

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={TableRowClass}
    >
      <Light
        className={classNames(styles.light, { [styles.active]: isHover })}
        color={LightColors.blue}
        position="left"
      />
      <div
        className={classNames(styles.table_row_cell, styles.table_row_cell_1, {
          [styles.active]: isHover,
        })}
      >
        <div className={styles.img}>
          <img
            src={isHover ? GamesColor[item.row.game] : Games[item.row.game]}
            alt=""
          />
        </div>
        <Text variant={TextVariants.h5}>{item.row.game}</Text>
      </div>
      <div
        className={classNames(styles.table_row_cell, styles.table_row_cell_2)}
      >
        <Avatar
          variant={AvatarVariants.sm}
          level={item.row.user.level}
          src={item.row.user.img}
          isLight={true}
          className={styles.avatar}
        />
        <Text variant={TextVariants.h5}>{item.row.user.name}</Text>
      </div>
      <div
        className={classNames(styles.table_row_cell, styles.table_row_cell_3)}
      >
        <Text variant={TextVariants.subtitle_medium}>{item.row.time}</Text>
      </div>
      <div
        className={classNames(styles.table_row_cell, styles.table_row_cell_4)}
      >
        <Text variant={TextVariants.h5}>{item.row.wager}$</Text>
      </div>
      <div
        className={classNames(styles.table_row_cell, styles.table_row_cell_5, {
          [styles.win]: item.row.isWin,
        })}
      >
        <Text variant={TextVariants.h5}>
          {item.row.mult.toFixed(2, "0")}x
          {item.row.isWin && (
            <Light
              position="bottom"
              color={LightColors.green}
              className={styles.win_light}
            />
          )}
        </Text>
      </div>
      <div
        className={classNames(styles.table_row_cell, styles.table_row_cell_6, {
          [styles.win]: item.row.isWin,
        })}
      >
        <Text variant={TextVariants.h5}>
          {!item.row.isWin && "-"}${item.row.payout.toFixed(2, "0")}
          {item.row.isWin && (
            <Light
              position="bottom"
              color={LightColors.green}
              className={styles.win_light}
            />
          )}
        </Text>
        <SvgIcon size={24} src={Icons.CurrencyIcon} isLight={true} />
      </div>
    </div>
  );
};

export default RowMain;
