import Position from "./Position/Position";
import type { PositionOption } from "./Position/Position-option";

const positionOptions: PositionOption[] = ["rock", "paper", "scissors"];

export default function Positions() {
  return (
    <>
      {positionOptions.map((option) => (
        <Position key={option} variant={option} />
      ))}
    </>
  );
}
