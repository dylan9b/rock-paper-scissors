import type { PositionOption } from "../../components/Positions/Position/Position-option";

export interface User {
  hasWon: boolean;
  selectedOptions: PositionOption[] | [];
  balance: number;
}
