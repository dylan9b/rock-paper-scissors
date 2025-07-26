import { useSelector } from "react-redux";
import { currentBetSelector } from "../../features/user";
import { gameMetaSelector } from "../../features/game";

interface ButtonProps {
  onClick: () => void;
}

export default function Button({ onClick }: ButtonProps) {
  const currentBet = useSelector(currentBetSelector);
  const { status } = useSelector(gameMetaSelector);

  const getLabel = () => {
    switch (status) {
      case "idle":
        return "Play";
      case "finished":
        return "Clear";
      default:
        return "Play";
    }
  };

  const disabled = currentBet === 0 || status === "playing";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={`w-full flex-1 md:flex-[0.26] bg-custom-black rounded-full text-xl uppercase px-8 py-4 border-2 text-custom-gold font-semibold border-custom-gold
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }
        `}
    >
      {getLabel()}
    </button>
  );
}
