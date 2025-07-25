import { useSelector } from "react-redux";
import { gameWinnerSelector, winningOptionSelector } from "../../features/game";
import BattleResultTie from "./BattleResultTie";
import BattleResultComputer from "./BattleResultComputer";
import BattleResultPlayer from "./BattleResultPlayer";

export default function BattleResult() {
  const winningOption = useSelector(winningOptionSelector);
  const gameWinner = useSelector(gameWinnerSelector);

  const isPlayerWin = gameWinner === "player" && winningOption;

  return (
    <article className="uppercase font-bold flex flex-col gap-2 items-center">
      {isPlayerWin ? (
        <BattleResultPlayer />
      ) : gameWinner === "tie" ? (
        <BattleResultTie />
      ) : (
        <BattleResultComputer />
      )}
    </article>
  );
}
