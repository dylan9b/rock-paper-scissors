import type { PositionOption } from "../../components/Positions/Position/Position-option";

export interface UserOption {
  type: PositionOption;
  bet: number;
}

export interface UserState {
  balance: number;
  selectedOptions: UserOption[];
  wins: number;
}
