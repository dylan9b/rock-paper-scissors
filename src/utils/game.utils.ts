// Util variable which maps x beats y
// ex: rock beats scissors
export const winsAgainst = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
} as const;

export const winnerLabel = {
  player: "you",
  computer: "computer",
  tie: "no one",
} as const;
