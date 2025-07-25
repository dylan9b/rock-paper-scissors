import type { PositionOption } from "../../components/Positions/Position/Position-option";

export interface UserOption {
  type: PositionOption;
  bet: number;
}

export interface User {
  hasWon: boolean;
  balance: number;

  selectedOptions: UserOption[];
}
