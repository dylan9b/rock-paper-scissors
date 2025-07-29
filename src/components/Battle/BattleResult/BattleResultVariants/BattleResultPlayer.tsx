import { useSelector } from "react-redux";
import { winningOptionSelector, gameMetaSelector } from "@features/game";
import { winningAmountSelector } from "@features/user";
import { winnerLabel } from "@utils/game.utils";
import BattleResultTitle from "../BattleResultTitle/BattleResultTitle";
import BattleResultSubtitle from "../BattleResultTitle/BattleResultSubtitle";

export default function BattleResultPlayer() {
  const winningOption = useSelector(winningOptionSelector);
  const winningAmount = useSelector(winningAmountSelector);
  const { winner } = useSelector(gameMetaSelector);

  return (
    <>
      <BattleResultTitle>{winningOption} won</BattleResultTitle>

      <BattleResultSubtitle>
        {winnerLabel[winner ?? "tie"]} win{" "}
        <span className="text-white">{winningAmount}</span>
      </BattleResultSubtitle>
    </>
  );
}
