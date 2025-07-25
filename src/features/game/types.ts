export type Winner = "computer" | "player" | "tie";
export type Status = "idle" | "playing" | "finished";

export interface GameState {
  betIncrement: number;
  winner: Winner | null;
  winningMultiplier: {
    single: number;
    double: number;
  };
  status: Status;
}
