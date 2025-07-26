import { useSelector } from "react-redux";
import { gameMetaSelector, winningOptionSelector } from "../../features/game";
import { currentBetSelector } from "../../features/user";
import { winnerLabel } from "../../utils/game.utils";
import { selectedComputerOptionSelector } from "../../features/computer";

export default function BattleResultComputer() {
  const winningOption = useSelector(winningOptionSelector);
  const computerOption = useSelector(selectedComputerOptionSelector);
  const currentBet = useSelector(currentBetSelector);
  const { winner } = useSelector(gameMetaSelector);

  return (
    <>
      <h1 className="text-7xl text-custom-green-light-1">
        {winningOption ?? computerOption} won
      </h1>
      <h2 className="text-custom-gold text-4xl">
        {winnerLabel[winner ?? "tie"]} wins{" "}
        <span className="text-white">{currentBet}</span>
      </h2>
    </>
  );
}
