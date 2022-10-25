import React from "react";
import classNames from "classnames";

import { ScrollTabs } from "../../../ScrollTabs";
import { ScrollVariants } from "../../../ScrollTabs/constants";
import { SvgIcon } from "../../../SvgIcon";
import { Icons } from "../../../SvgIcon/constants";
import { Text } from "../../../Text";
import { TextVariants } from "../../../Text/constants";
import { TopicMainOptions } from "../../constants";

import styles from "./TopicMain.module.scss";

const TopicMain = () => {
  const TableTopicClass = classNames(styles.table_topic);

  return (
    <div className={TableTopicClass}>
      <div className={styles.title}>
        <SvgIcon src={Icons.Crown} size={48} isLight={true} />
        <Text variant={TextVariants.title}>Live feed</Text>
      </div>
      <ScrollTabs
        options={TopicMainOptions}
        variant={ScrollVariants.blue}
        isLight={true}
      />
    </div>
  );
};

export default TopicMain;
