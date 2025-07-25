import { useSelector } from "react-redux";
import { selectedComputerOptionSelector } from "../../features/computer";
import { winningOptionSelector } from "../../features/game";

export default function Battle() {
  const computerSelection = useSelector(selectedComputerOptionSelector);
  const winningOption = useSelector(winningOptionSelector);

  return (
    <div className="flex items-center justify-center gap-4 uppercase font-bold text-6xl">
      {winningOption ? (
        <>
          <h1 className="text-white">{computerSelection}</h1>
          <span className="text-custom-gold uppercase">VS</span>
          <h1 className="text-white">{winningOption}</h1>
        </>
      ) : (
        <h1 className="text-white">Computer Wins</h1>
      )}
    </div>
  );
}
