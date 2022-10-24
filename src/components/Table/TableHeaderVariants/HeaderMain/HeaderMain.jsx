import React from "react";
import classNames from "classnames";

import { Text } from "../../../Text";
import { TextVariants, TextWeightVariants } from "../../../Text/constants";

import styles from "./HeaderMain.module.scss";

const HeaderMain = ({ columns }) => {
  return (
    <div className={styles.table_header}>
      <div className={styles.separator}></div>
      <div className={styles.column_container}>
        <div
          className={classNames(
            styles.table_column_cell,
            styles.table_column_cell_1
          )}
        >
          <Text
            className={styles.text_header}
            variant={TextVariants.subtitle_medium}
            weight={TextWeightVariants.Bold}
          >
            {columns.game}
          </Text>
        </div>
        <div
          className={classNames(
            styles.table_column_cell,
            styles.table_column_cell_2
          )}
        >
          <Text
            className={styles.text_header}
            variant={TextVariants.subtitle_medium}
            weight={TextWeightVariants.Bold}
          >
            {columns.user}
          </Text>
        </div>
        <div
          className={classNames(
            styles.table_column_cell,
            styles.table_column_cell_3
          )}
        >
          <Text
            className={styles.text_header}
            variant={TextVariants.subtitle_medium}
            weight={TextWeightVariants.Bold}
          >
            {columns.time}
          </Text>
        </div>
        <div
          className={classNames(
            styles.table_column_cell,
            styles.table_column_cell_4
          )}
        >
          <Text
            className={styles.text_header}
            variant={TextVariants.subtitle_medium}
            weight={TextWeightVariants.Bold}
          >
            {columns.wager}
          </Text>
        </div>
        <div
          className={classNames(
            styles.table_column_cell,
            styles.table_column_cell_5
          )}
        >
          <Text
            className={styles.text_header}
            variant={TextVariants.subtitle_medium}
            weight={TextWeightVariants.Bold}
          >
            {columns.mult}
          </Text>
        </div>
        <div
          className={classNames(
            styles.table_column_cell,
            styles.table_column_cell_6
          )}
        >
          <Text
            className={styles.text_header}
            variant={TextVariants.subtitle_medium}
            weight={TextWeightVariants.Bold}
          >
            {columns.payout}
          </Text>
        </div>
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default HeaderMain;
