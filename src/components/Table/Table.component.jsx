import React from "react";
import classNames from "classnames";

import TableHeader from "./TableHeaderVariants/TableHeader";
import TableRow from "./TableRowVariants/TableRow";
import TableTopic from "./TableTopicVariants/TableTopic";

import styles from "./Table.module.scss";

export const TableComponent = ({ data, columnNames, variant, className }) => {
  const TableClass = classNames(
    styles.table,
    {
      [styles[`table_variant_${variant}`]]: variant,
    },
    className
  );

  return (
    <div className={TableClass}>
      <TableTopic variant={variant} />
      <TableHeader variant={variant} columns={columnNames} />
      <div className={styles.table_content}>
        {data.map((item, index) => (
          <TableRow key={index} variant={variant} item={item} />
        ))}
      </div>
    </div>
  );
};

TableComponent.displayName = "Table";
