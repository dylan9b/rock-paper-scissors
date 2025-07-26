type PositionUIProps = {
  optionType: string;
  bet: number | null;
  isDisabled: boolean;
  isWinner: boolean;
  onClick: () => void;
  onIncreaseBet: () => void;
  styles: {
    text: string;
    borderColor: string;
    bgColor: string;
    winClass: string;
  };
};

export function PositionUI({
  optionType,
  bet,
  isDisabled,
  isWinner,
  onClick,
  onIncreaseBet,
  styles,
}: PositionUIProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`w-full min-h-40 flex-1 flex flex-col justify-end items-center px-3 py-4 rounded-md uppercase text-2xl font-semibold
        ${styles.text} ${styles.bgColor} 
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}
        ${
          isWinner
            ? `border-4 ${styles.winClass}`
            : `border-2 ${styles.borderColor}`
        }
      `}
    >
      <span
        className={`flex flex-col h-full items-center gap-4 ${
          bet === null ? "justify-end" : "justify-between"
        }`}
      >
        {bet !== null && (
          <div className="flex items-center gap-2">
            <span
              onClick={(e) => {
                e.stopPropagation();
                onIncreaseBet();
              }}
              className="flex items-center justify-center bg-white text-black border-3 text-base rounded-full p-2 font-extrabold border-custom-blue-light-2 w-12 h-12"
            >
              {bet}
            </span>
          </div>
        )}
        {optionType}
      </span>
    </button>
  );
}
