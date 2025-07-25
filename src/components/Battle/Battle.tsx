import { useSelector } from "react-redux";
import { selectedComputerOptionSelector } from "../../features/computer";
import { gameStatusSelector } from "../../features/game";
import { selectedOptionsSelector } from "../../features/user";
import BattleResult from "./BattleResult";

export default function Battle() {
  const computerSelection = useSelector(selectedComputerOptionSelector);
  const selectedOptions = useSelector(selectedOptionsSelector).map(
    (option) => option.type
  );
  const gameStatus = useSelector(gameStatusSelector);

  return (
    <div className="flex items-center justify-center gap-4 uppercase font-bold text-6xl">
      {gameStatus === "finished" && <BattleResult />}

      {gameStatus === "playing" && (
        <>
          <h1 className="text-white">{computerSelection}</h1>
          <span className="text-custom-gold uppercase">VS</span>
          <h1 className="text-white">{selectedOptions.join("/")}</h1>
        </>
      )}
    </div>
  );
}
