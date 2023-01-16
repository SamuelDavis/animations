export type Animation = {
  frames: number;
  width: number;
  height: number;
  src: string;
  speed: number;
};

export enum Animal {
  Bear = "Bear",
  Boar = "Boar",
  Deer = "Deer",
  Fox = "Fox",
  Rabbit = "Rabbit",
  Wolf = "Wolf",
}

export enum Action {
  Walk = "Walk",
  Run = "Run",
  Idle = "Idle",
}

export const animations: Record<
  Animal,
  Record<Action, Omit<Animation, "src">>
> = {
  [Animal.Bear]: {
    [Action.Walk]: {
      frames: 5,
      width: 64,
      height: 33,
      speed: 2,
    },
    [Action.Run]: {
      frames: 8,
      width: 64,
      height: 33,
      speed: 2,
    },
    [Action.Idle]: {
      frames: 12,
      width: 64,
      height: 33,
      speed: 2,
    },
  },
  [Animal.Boar]: {
    [Action.Walk]: {
      frames: 8,
      width: 64,
      height: 40,
      speed: 2,
    },
    [Action.Run]: {
      frames: 6,
      width: 64,
      height: 40,
      speed: 2,
    },
    [Action.Idle]: {
      frames: 8,
      width: 64,
      height: 40,
      speed: 2,
    },
  },
  [Animal.Deer]: {
    [Action.Walk]: {
      frames: 8,
      width: 72,
      height: 52,
      speed: 1,
    },
    [Action.Run]: {
      frames: 6,
      width: 72,
      height: 52,
      speed: 0.5,
    },
    [Action.Idle]: {
      frames: 10,
      width: 72,
      height: 52,
      speed: 2,
    },
  },
  [Animal.Fox]: {
    [Action.Walk]: {
      frames: 8,
      width: 64,
      height: 36,
      speed: 2,
    },
    [Action.Run]: {
      frames: 6,
      width: 64,
      height: 36,
      speed: 2,
    },
    [Action.Idle]: {
      frames: 6,
      width: 64,
      height: 36,
      speed: 2,
    },
  },
  [Animal.Rabbit]: {
    [Action.Walk]: {
      frames: 10,
      width: 32,
      height: 26,
      speed: 2,
    },
    [Action.Run]: {
      frames: 6,
      width: 32,
      height: 26,
      speed: 0.25,
    },
    [Action.Idle]: {
      frames: 10,
      width: 32,
      height: 26,
      speed: 2,
    },
  },
  [Animal.Wolf]: {
    [Action.Walk]: {
      frames: 8,
      width: 64,
      height: 40,
      speed: 2,
    },
    [Action.Run]: {
      frames: 6,
      width: 64,
      height: 40,
      speed: 2,
    },
    [Action.Idle]: {
      frames: 10,
      width: 64,
      height: 40,
      speed: 2,
    },
  },
};
