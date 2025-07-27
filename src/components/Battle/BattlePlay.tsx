import { useSelector } from "react-redux";
import { selectedComputerOptionSelector } from "../../features/computer";
import { userBattleChoiceDisplaySelector } from "../../features/game";

export default function BattlePlay() {
  const computerSelection = useSelector(selectedComputerOptionSelector);
  const useBattleChoiceDisplay = useSelector(userBattleChoiceDisplaySelector);

  return (
    <>
      <h1 className="text-white">{computerSelection}</h1>
      <span className="text-custom-gold uppercase">VS</span>
      <h1 className="text-white">{useBattleChoiceDisplay}</h1>
    </>
  );
}
