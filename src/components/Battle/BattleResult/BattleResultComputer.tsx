import { useSelector } from "react-redux";
import { selectedComputerOptionSelector } from "@features/computer";
import { winningOptionSelector, gameMetaSelector } from "@features/game";
import { currentBetSelector } from "@features/user";
import { winnerLabel } from "@utils/game.utils";

export default function BattleResultComputer() {
  const winningOption = useSelector(winningOptionSelector);
  const computerOption = useSelector(selectedComputerOptionSelector);
  const currentBet = useSelector(currentBetSelector);
  const { winner } = useSelector(gameMetaSelector);

  return (
    <>
      <h1 className="text-3xl md:text-7xl text-custom-green-light-1">
        {winningOption ?? computerOption} won
      </h1>
      <h2 className="text-custom-gold text-2xl md:text-4xl">
        {winnerLabel[winner ?? "tie"]} wins{" "}
        <span className="text-white">{currentBet}</span>
      </h2>
    </>
  );
}
