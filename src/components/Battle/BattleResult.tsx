import { useSelector } from "react-redux";
import { gameMetaSelector, winningOptionSelector } from "../../features/game";
import BattleResultTie from "./BattleResultTie";
import BattleResultComputer from "./BattleResultComputer";
import BattleResultPlayer from "./BattleResultPlayer";

export default function BattleResult() {
  const winningOption = useSelector(winningOptionSelector);
  const { winner } = useSelector(gameMetaSelector);

  const isPlayerWin = winner === "player" && winningOption;

  return (
    <article className="uppercase font-bold flex flex-col gap-2 items-center">
      {isPlayerWin ? (
        <BattleResultPlayer />
      ) : winner === "tie" ? (
        <BattleResultTie />
      ) : (
        <BattleResultComputer />
      )}
    </article>
  );
}
