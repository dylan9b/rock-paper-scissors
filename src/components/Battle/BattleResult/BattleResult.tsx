import { useSelector } from "react-redux";
import BattleResultComputer from "./BattleResultVariants/BattleResultComputer";
import BattleResultPlayer from "./BattleResultVariants/BattleResultPlayer";
import BattleResultTie from "./BattleResultVariants/BattleResultTie";
import {
  winningOptionSelector,
  gameMetaSelector,
} from "@features/game";

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
