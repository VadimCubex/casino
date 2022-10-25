import React from "react";
import { useEffect } from "react";

import { GameCard } from "../../components/Cards";
import { SvgIcon } from "../../components/SvgIcon";
import { Icons } from "../../components/SvgIcon/constants";
import { Table } from "../../components/Table";
import { TableVariants } from "../../components/Table/constants";
import { Text } from "../../components/Text";
import {
  TextVariants,
  TextWeightVariants,
} from "../../components/Text/constants";
import { Games, HighWinsColumn, HighWinsData } from "./constants";

import styles from "./Home.module.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.games_container}>
        <div className={styles.title}>
          <SvgIcon size={50} src={Icons.Cup} />
          <Text variant={TextVariants.title} weight={TextWeightVariants.Bold}>
            RBXhype originals
          </Text>
        </div>
        <div className={styles.gameCards}>
          {Games.map((game, index) => (
            <GameCard key={index} item={game} />
          ))}
        </div>
      </div>
      <Table
        data={HighWinsData}
        columnNames={HighWinsColumn}
        variant={TableVariants.Main}
      />
    </div>
  );
};

export default Home;
