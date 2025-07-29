import { useSelector } from "react-redux";
import { selectedComputerOptionSelector } from "@features/computer";
import { winningOptionSelector, gameMetaSelector } from "@features/game";
import { currentBetSelector } from "@features/user";
import { winnerLabel } from "@utils/game.utils";
import BattleResultTitle from "./BattleResult-Title";
import BattleResultSubtitle from "./BattleResult-Subtitle";

export default function BattleResultComputer() {
  const winningOption = useSelector(winningOptionSelector);
  const computerOption = useSelector(selectedComputerOptionSelector);
  const currentBet = useSelector(currentBetSelector);
  const { winner } = useSelector(gameMetaSelector);

  return (
    <>
      <BattleResultTitle>
        {winningOption ?? computerOption} won
      </BattleResultTitle>

      <BattleResultSubtitle>
        {winnerLabel[winner ?? "tie"]} wins{" "}
        <span className="text-white">{currentBet}</span>
      </BattleResultSubtitle>
    </>
  );
}
