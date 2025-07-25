import { useSelector } from "react-redux";
import { balanceSelector, currentBetSelector } from "../../features/user";

export default function Header() {
  const userBalance = useSelector(balanceSelector);
  const userBet = useSelector(currentBetSelector);

  return (
    <header>
      <div className="flex gap-8 items-center">
        <p>Balance: {userBalance}</p>
        <p>Bet: {userBet}</p>
      </div>
    </header>
  );
}
