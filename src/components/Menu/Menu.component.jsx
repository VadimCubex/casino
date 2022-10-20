import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AdditionalNavLinks, NavLinks } from "./constants";
import { Logo } from "../../constants/constants";
import { Balance } from "../Balance";
import { Button } from "../Button";
import { ButtonSizeVariants, ButtonVariants } from "../Button/constants";
import { DropDown } from "../DropDown";
import { Language } from "../Language";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";
import { TextVariants } from "../Text/constants";

import styles from "./Menu.module.scss";

export const MenuComponent = () => {
  const [active, setActive] = useState("");
  const [isOpenAdditionalLinks, setIsOpenAdditionalLinks] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const MenuClass = classNames(styles.menu);

  const handleClickItem = (item) => {
    if (item.text !== "Tools") {
      navigate(item.link);
      setActive(location.pathname);
    } else {
      setActive("Tools");
    }
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <header className={MenuClass}>
      <div className={"container"}>
        <nav className={styles.nav_container}>
          <div>
            <div className={styles.nav_logo}>
              <SvgIcon className={styles.logo} size={24} src={Logo} />
              <Text variant={TextVariants.h3}>RBXhype</Text>
            </div>
            <div className={styles.nav_bar}>
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
                    <Link to={item.link ? item.link : ""}>
                      <Text variant={TextVariants.h5_regular}>{item.text}</Text>
                    </Link>
                  </li>
                ))}
                <li
                  onClick={() =>
                    setIsOpenAdditionalLinks(!isOpenAdditionalLinks)
                  }
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
                            <Text variant={TextVariants.h5_regular}>
                              {item.text}
                            </Text>
                          </Link>
                        </div>
                      ))}
                    </DropDown>
                  </div>
                </li>
              </ul>
            </div>
            <Language />
          </div>
          <div className={styles.nav_profile}>
            <Button
              text="Withdraw"
              size={ButtonSizeVariants.large}
              variant={ButtonVariants.default}
            />
            <Balance />
          </div>
        </nav>
      </div>
    </header>
  );
};

MenuComponent.displayName = "Menu";
