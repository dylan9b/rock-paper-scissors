import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  balanceSelector,
  currentBetSelector,
  winsSelector,
} from "../../features/user";
import HeaderItem from "./Header-item/Header-item";

export default function Header() {
  const userBalance = useSelector(balanceSelector);
  const userBet = useSelector(currentBetSelector);
  const userWins = useSelector(winsSelector);

  const items = useMemo(
    () => [
      { label: "Balance", value: userBalance },
      { label: "Bet", value: userBet },
      { label: "Wins", value: userWins },
    ],
    [userBalance, userBet, userWins]
  );

  return (
    <div className="flex justify-center gap-8 items-center bg-custom-dark-gray p-2 uppercase text-custom-gold text-base font-bold">
      {items.map((item) => (
        <HeaderItem key={item.label} label={item.label} value={item.value} />
      ))}
    </div>
  );
}
