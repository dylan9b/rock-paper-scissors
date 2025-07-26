import { useSelector } from "react-redux";
import { selectedComputerOptionSelector } from "../../features/computer";
import {
  gameMetaSelector,
  userBattleChoiceDisplaySelector,
} from "../../features/game";
import BattleResult from "./BattleResult";

export default function Battle() {
  const computerSelection = useSelector(selectedComputerOptionSelector);
  const { status } = useSelector(gameMetaSelector);
  const useBattleChoiceDisplay = useSelector(userBattleChoiceDisplaySelector);

  return (
    <div className="flex items-center justify-center gap-4 uppercase font-bold text-6xl">
      {status === "finished" && <BattleResult />}

      {status === "playing" && (
        <>
          <h1 className="text-white">{computerSelection}</h1>
          <span className="text-custom-gold uppercase">VS</span>
          <h1 className="text-white">{useBattleChoiceDisplay}</h1>
        </>
      )}
    </div>
  );
}
