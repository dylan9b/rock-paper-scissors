import type { UserOption } from "../../features/user";
import Position from "./Position/Position";

const positionOptions: UserOption[] = [
  { type: "rock", bet: 500 },
  { type: "paper", bet: 500 },
  { type: "scissors", bet: 500 },
];

export default function Positions() {
  return (
    <>
      {positionOptions.map((option) => (
        <Position key={option.type} option={option} />
      ))}
    </>
  );
}
