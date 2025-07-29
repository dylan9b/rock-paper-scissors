import { useSelector } from "react-redux";
import { winningAmountSelector } from "@features/user";
import BattleResultTitle from "./BattleResult-Title";
import BattleResultSubtitle from "./BattleResult-Subtitle";

export default function BattleResultTie() {
  const winningAmount = useSelector(winningAmountSelector);

  return (
    <>
      <BattleResultTitle> It's a Tie!</BattleResultTitle>

      <BattleResultSubtitle>
        (Bet returned with <span className="text-white">{winningAmount}</span>)
      </BattleResultSubtitle>
    </>
  );
}
