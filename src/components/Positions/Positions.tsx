import { useSelector } from "react-redux";
import { gameMetaSelector } from "@features/game";
import { useMemo } from "react";
import type { UserOption } from "@features/user";
import { Position } from "./Position/Position";

export default function Positions() {
  const { betIncrement } = useSelector(gameMetaSelector);

  const positionOptions = useMemo<UserOption[]>(
    () => [
      { type: "rock", bet: betIncrement },
      { type: "paper", bet: betIncrement },
      { type: "scissors", bet: betIncrement },
    ],
    [betIncrement],
  );

  return (
    <>
      {positionOptions.map((option) => (
        <Position key={option.type} option={option} />
      ))}
    </>
  );
}
