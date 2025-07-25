import { useSelector } from "react-redux";
import { currentBetSelector } from "../../features/user";

export default function BattleResultComputer() {
  const currentBet = useSelector(currentBetSelector);

  return (
    <>
      <h1 className="text-7xl text-custom-green-light-1">Computer Wins</h1>
      <h2 className="text-custom-gold text-4xl">
        You lost <span className="text-white">{currentBet}</span>
      </h2>
    </>
  );
}
