import { useSelector } from "react-redux";
import { currentBetSelector } from "../../features/user";

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  const currentBet = useSelector(currentBetSelector);

  return (
    <button
      disabled={currentBet === 0}
      type="button"
      className={`w-full md:flex-[0.08] bg-custom-black rounded-full text-xl uppercase px-8 py-4 border-2 text-custom-gold font-semibold border-custom-gold
        ${
          currentBet === 0
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }
        `}
    >
      {label}
    </button>
  );
}
