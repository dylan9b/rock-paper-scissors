import { useSelector } from "react-redux";
import { winningAmountSelector } from "@features/user";

export default function BattleResultTie() {
  const winningAmount = useSelector(winningAmountSelector);

  return (
    <>
      <h1 className="text-3xl md:text-7xl text-custom-green-light-1">
        It's a Tie!
      </h1>
      <h2 className="text-custom-gold text-center text-2xl md:text-4xl">
        (Bet returned with <span className="text-white">{winningAmount}</span>)
      </h2>
    </>
  );
}
