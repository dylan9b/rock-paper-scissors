import { useSelector } from "react-redux";
import { winnerLabel } from "../../utils/game.utils";
import { gameMetaSelector, winningOptionSelector } from "../../features/game";
import { winningAmountSelector } from "../../features/user";

export default function BattleResultPlayer() {
  const winningOption = useSelector(winningOptionSelector);
  const winningAmount = useSelector(winningAmountSelector);
  const { winner } = useSelector(gameMetaSelector);

  return (
    <>
      <h1 className="text-7xl text-custom-green-light-1">
        {winningOption} won
      </h1>
      <h2 className="text-custom-gold text-4xl">
        {winnerLabel[winner ?? "tie"]} win{" "}
        <span className="text-white">{winningAmount}</span>
      </h2>
    </>
  );
}
