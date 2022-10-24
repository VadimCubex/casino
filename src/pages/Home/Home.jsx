import React from "react";
import { useEffect } from "react";

import { Table } from "../../components/Table";
import { TableVariants } from "../../components/Table/constants";
import { HighWinsColumn, HighWinsData } from "./constants";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Table
        data={HighWinsData}
        columnNames={HighWinsColumn}
        variant={TableVariants.Main}
      />
    </>
  );
};

export default Home;
