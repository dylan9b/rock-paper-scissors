import { useSelector } from "react-redux";
import { gameMetaSelector } from "../../features/game";
import BattlePlay from "./BattlePlay";
import BattleResult from "./BattleResult/BattleResult";

export default function Battle() {
  const { status } = useSelector(gameMetaSelector);

  return (
    <div className="flex items-center justify-center gap-4 uppercase font-bold text-6xl">
      {status === "playing" && <BattlePlay />}
      {status === "finished" && <BattleResult />}
    </div>
  );
}
