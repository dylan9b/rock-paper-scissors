import type { PositionOption } from "../../components/Position/Position-option";

export interface User {
  hasWon: boolean;
  selectedOptions: PositionOption[] | [];
  balance: number;
}
