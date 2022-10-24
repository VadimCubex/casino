import {
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
} from "../../constants/constants";

export const HighWinsColumn = {
  game: "Game",
  user: "User",
  time: "Time",
  wager: "Wager",
  mult: "Mult",
  payout: "Payout",
};

export const HighWinsData = [
  {
    row: {
      game: "Crash",
      user: {
        name: "Aert1357",
        img: Avatar2,
        level: 1,
      },
      time: "8:40 am",
      wager: 10,
      mult: 0.0,
      payout: 10.0,
      isWin: false,
    },
  },
  {
    row: {
      game: "Mines",
      user: {
        name: "tybandzzzz",
        img: Avatar3,
        level: 2,
      },
      time: "8:40 am",
      wager: 14,
      mult: 0.0,
      payout: 25.0,
      isWin: false,
    },
  },
  {
    row: {
      game: "Coinflip",
      user: {
        name: "mrRobLucky",
        img: Avatar4,
        level: 3,
      },
      time: "8:40 am",
      wager: 25,
      mult: 0.71,
      payout: 20.0,
      isWin: true,
    },
  },
  {
    row: {
      game: "Cases",
      user: {
        name: "Dorynel2000",
        img: Avatar5,
        level: 1,
      },
      time: "8:40 am",
      wager: 10,
      mult: 3.65,
      payout: 36.5,
      isWin: true,
    },
  },
  {
    row: {
      game: "Coinflip",
      user: {
        name: "RandyBoranders",
        img: Avatar6,
        level: 5,
      },
      time: "8:40 am",
      wager: 14,
      mult: 0.0,
      payout: 10.0,
      isWin: false,
    },
  },
];
