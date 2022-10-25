import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AdditionalNavLinks, NavLinks } from "./constants";
import { Avatar1, Logo } from "../../constants/constants";
import { Avatar } from "../Avatar";
import { AvatarVariants } from "../Avatar/constants";
import { Balance } from "../Balance";
import { Button } from "../Button";
import { ButtonSizeVariants, ButtonVariants } from "../Button/constants";
import { DropDown } from "../DropDown";
import { Language } from "../Language";
import { SvgIcon } from "../SvgIcon";
import { ColorSvgVariants, Icons } from "../SvgIcon/constants";
import { Text } from "../Text";
import { TextVariants, TextWeightVariants } from "../Text/constants";

import styles from "./Menu.module.scss";

export const MenuComponent = () => {
  const [active, setActive] = useState("");
  const [isOpenAdditionalLinks, setIsOpenAdditionalLinks] = useState(false);
  const [isOpenProfiles, setIsOpenProfiles] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const MenuClass = classNames(styles.menu);

  const handleClickItem = (item) => {
    navigate(item.link);
    setActive(location.pathname);
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <header className={MenuClass}>
      <div className={classNames(styles.header_container, "container")}>
        <div>
          <div className={styles.nav_logo}>
            <SvgIcon className={styles.logo} size={24} src={Logo} />
            <Text variant={TextVariants.h3}>RBXhype</Text>
          </div>
          <nav className={styles.nav_bar}>
            <ul className={styles.nav_list}>
              {NavLinks.map((item, index) => (
                <li
                  className={classNames(
                    styles.nav_list_item,
                    "cursor_pointer",
                    {
                      active: active === item.link,
                    }
                  )}
                  onClick={() => {
                    handleClickItem(item);
                  }}
                  key={index}
                >
                  <Text
                    variant={TextVariants.h5}
                    weight={TextWeightVariants.Regular}
                  >
                    {item.text}
                  </Text>
                </li>
              ))}
              <li
                onClick={() => setIsOpenAdditionalLinks(!isOpenAdditionalLinks)}
                className={classNames(styles.nav_list_item, "cursor_pointer")}
              >
                <div
                  className={classNames(styles.dots, {
                    [styles.active]: isOpenAdditionalLinks,
                  })}
                >
                  <div className={styles.dot} />
                  <div className={styles.dot} />
                  <div className={styles.dot} />
                  <DropDown
                    className={styles.additional}
                    isOpen={isOpenAdditionalLinks}
                  >
                    {AdditionalNavLinks.map((item, index) => (
                      <div key={index}>
                        <Link to={item.link ? item.link : ""}>
                          <Text
                            variant={TextVariants.h5}
                            weight={TextWeightVariants.Regular}
                          >
                            {item.text}
                          </Text>
                        </Link>
                      </div>
                    ))}
                  </DropDown>
                </div>
              </li>
            </ul>
          </nav>
          <Language />
        </div>
        <div className={styles.nav_profile}>
          <div className={styles.light} />
          <Button
            text="Withdraw"
            size={ButtonSizeVariants.large}
            variant={ButtonVariants.default}
          />
          <Balance />
          <div
            onClick={() => setIsOpenProfiles(!isOpenProfiles)}
            className={styles.avatar}
          >
            <Avatar
              variant={AvatarVariants.sm}
              level={1}
              src={Avatar1}
              isLight={true}
            />
            <SvgIcon
              size={7}
              src={Icons.ArrowBottomStroke}
              color={ColorSvgVariants.white}
              rotate={isOpenProfiles ? "180" : "0"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

MenuComponent.displayName = "Menu";
