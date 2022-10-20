import React from "react";
import classNames from "classnames";

import { Button } from "../Button";
import { ButtonVariants } from "../Button/constants";
import { SvgIcon } from "../SvgIcon";
import {
  ArrowBottomStroke,
  ColorSvgVariants,
  CurrencyIcon,
} from "../SvgIcon/constants";
import { Text } from "../Text";
import { TextVariants } from "../Text/constants";

import { useProfileInfoSelector } from "../../store/Profile/ProfileInfo/useProfileInfo";

import styles from "./Balance.module.scss";

export const BalanceComponent = ({ className }) => {
  const BalanceClass = classNames(styles.balance, className);
  const { balance } = useProfileInfoSelector();

  return (
    <div className={BalanceClass}>
      <SvgIcon size={24} src={CurrencyIcon} isLight={true} />
      <div className={styles.count}>
        <Text variant={TextVariants.h4}>$ {balance.toFixed(2, "0")}</Text>
        <SvgIcon
          src={ArrowBottomStroke}
          size={7}
          color={ColorSvgVariants.white}
        />
      </div>
      <Button
        className={styles.deposit}
        text="Deposit"
        variant={ButtonVariants.yellow}
      />
    </div>
  );
};

BalanceComponent.displayName = "Balance";
