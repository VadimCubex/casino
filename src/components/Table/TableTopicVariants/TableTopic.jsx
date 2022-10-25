import React from "react";

import TopicMain from "./TopicMain/TopicMain";
import { TableVariants } from "../constants";

const TableTopic = ({ variant }) => {
  const TopicVariantMap = {
    [TableVariants.Main]: <TopicMain />,
  };

  return <>{TopicVariantMap[variant]}</>;
};

export default TableTopic;
