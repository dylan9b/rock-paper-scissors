import type { PositionOption } from "../../components/Positions/Position/Position-option";

export interface UserOption {
  type: PositionOption;
  bet: number;
}

export interface User {
  balance: number;
  selectedOptions: UserOption[];
  wins: number;
}
