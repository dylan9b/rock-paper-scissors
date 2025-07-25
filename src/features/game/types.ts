export type Winner = "computer" | "player" | "tie";

export interface Game {
  betIncrement: number;
  winner: Winner | null;
  totalBetValue: number;
  winningMultiplier: {
    single: number;
    multiple: number;
  };
}
