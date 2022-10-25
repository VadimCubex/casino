import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";

import { SubNavLinks } from "./constants";
import { numberWithCommas } from "../../helpers/helpers";
import { Button } from "../Button";
import { ButtonSizeVariants, ButtonVariants } from "../Button/constants";
import { Input } from "../Input";
import { InputVariants } from "../Input/constants";
import { Light } from "../Light";
import { LightColors } from "../Light/constants";
import { SvgIcon } from "../SvgIcon";
import { ColorSvgVariants, Icons } from "../SvgIcon/constants";
import { Text } from "../Text";
import { TextVariants, TextWeightVariants } from "../Text/constants";

import styles from "./SubMenu.module.scss";

export const SubMenuComponent = () => {
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const SubMenuClass = classNames(styles.sub_menu);

  const handleClickItem = (item) => {
    navigate(item.link);
    setActive(location.pathname);
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className={SubMenuClass}>
      <nav className={styles.nav_bar}>
        <ul className={styles.nav_list}>
          {SubNavLinks.map((item, index) => (
            <li
              className={classNames(styles.nav_list_item, "cursor_pointer", {
                active: active === item.link,
              })}
              onClick={() => {
                handleClickItem(item);
              }}
              key={index}
            >
              <Text
                className={styles.game}
                variant={TextVariants.h5}
                weight={TextWeightVariants.Medium}
              >
                {item.text}
              </Text>
              {index !== SubNavLinks.length - 1 && (
                <div className={styles.separator}></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.info}>
        <div className={styles.best}>
          <div>
            <SvgIcon size={24} src={Icons.TicketStar} />
            <Text variant={TextVariants.h5} weight={TextWeightVariants.Bold}>
              {numberWithCommas(2800828712)}
            </Text>
          </div>
          <Text variant={TextVariants.h5} weight={TextWeightVariants.Medium}>
            Best Wagered
          </Text>
          <Light
            width="full"
            color={LightColors.yellow}
            position="bottom"
            className={styles.light}
          />
        </div>
        <Input
          variant={InputVariants.small}
          placeholder="Search games"
          isLight={true}
          lightColor={LightColors.blue}
          leftSide={
            <SvgIcon
              className={styles.search_icon}
              size={24}
              src={Icons.SearchIcon}
              color={ColorSvgVariants.white}
            />
          }
          rightSide={
            <Button
              className={styles.search_btn}
              size={ButtonSizeVariants.small}
              variant={ButtonVariants.blue}
              text="Search"
              isLight={true}
            />
          }
        />
      </div>
    </div>
  );
};

SubMenuComponent.displayName = "SubMenu";
