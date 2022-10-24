import React from "react";

import RowTickets from "./RowMain/RowMain";
import { TableVariants } from "../constants";

const TableRow = ({ variant, item }) => {
  const RowVariantMap = {
    [TableVariants.Main]: <RowTickets item={item} />,
  };

  return <>{RowVariantMap[variant]}</>;
};

export default TableRow;
