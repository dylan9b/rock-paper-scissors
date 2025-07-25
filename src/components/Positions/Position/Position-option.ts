export const positionOptions = ["rock", "paper", "scissors"] as const;
export type PositionOption = (typeof positionOptions)[number];
