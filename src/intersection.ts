export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const pitcher1: Pitcher1 = {
  throwingSpeed: 154,
};

const batter1: Batter1 = {
  battingAverage: 0.36,
};

type TwoWayPlayer = Pitcher1 & Batter1;

const twoWayPlayer: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
