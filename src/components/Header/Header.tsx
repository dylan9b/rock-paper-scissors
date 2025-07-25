import { useSelector } from "react-redux";
import {
  balanceSelector,
  currentBetSelector,
  winsSelector,
} from "../../features/user";

export default function Header() {
  const userBalance = useSelector(balanceSelector);
  const userBet = useSelector(currentBetSelector);
  const userWins = useSelector(winsSelector);

  return (
    <div className="flex justify-center gap-8 items-center bg-custom-dark-gray p-2 uppercase text-custom-gold text-base font-bold">
      <p>Balance: <span className="text-white">{userBalance}</span></p>
      <p>Bet: <span className="text-white">{userBet}</span></p>
      <p>Wins: <span className="text-white">{userWins}</span></p>
    </div>
  );
}
