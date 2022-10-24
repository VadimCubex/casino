import React from "react";

import HeaderMain from "./HeaderMain/HeaderMain";
import { TableVariants } from "../constants";

const TableHeader = ({ variant, columns }) => {
  const HeaderVariantMap = {
    [TableVariants.Main]: <HeaderMain columns={columns} />,
  };

  return <>{HeaderVariantMap[variant]}</>;
};

export default TableHeader;
