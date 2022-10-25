import React from "react";

import RowMain from "./RowMain/RowMain";
import { TableVariants } from "../constants";

const TableRow = ({ variant, item }) => {
  const RowVariantMap = {
    [TableVariants.Main]: <RowMain item={item} />,
  };

  return <>{RowVariantMap[variant]}</>;
};

export default TableRow;
