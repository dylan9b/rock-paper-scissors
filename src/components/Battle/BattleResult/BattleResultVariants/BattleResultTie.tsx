import { useSelector } from "react-redux";
import { winningAmountSelector } from "@features/user";
import BattleResultTitle from "../BattleResultTitle/BattleResultTitle";
import BattleResultSubtitle from "../BattleResultTitle/BattleResultSubtitle";

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
