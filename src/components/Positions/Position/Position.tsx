import {
  balanceSelector,
  selectedOptionSelector,
  selectedOptionsSelector,
  UserActions,
  type UserOption,
} from "../../../features/user";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { variantStyles } from "./Position-styles";
import { useSelector } from "react-redux";
import type React from "react";
import {
  gameStatusSelector,
  winningOptionSelector,
} from "../../../features/game";

type PositionProps = {
  option: UserOption;
};

export default function Position({ option }: PositionProps) {
  const dispatch = useAppDispatch();

  const totalOptionsSelected = useSelector(selectedOptionsSelector).length;
  const selectedOption = useSelector(selectedOptionSelector(option.type));
  const winningOption = useSelector(winningOptionSelector);
  const balance = useSelector(balanceSelector);
  const gameStatus = useSelector(gameStatusSelector);

  const shouldOptionBeDisabled =
    (balance > 0 && totalOptionsSelected === 2 && !selectedOption) ||
    (balance === 0 && !selectedOption) ||
    gameStatus !== "idle";

  const { text, borderColor, bgColor } = variantStyles[option.type];

  const shouldHighlightWinner =
    winningOption === option.type && gameStatus === "finished";

  const handleOnAdd = (option: UserOption) => {
    dispatch(UserActions.addOption(option));
  };

  const handleOnRemove = (option: UserOption) => {
    if (selectedOption) {
      option = {
        ...option,
        bet: selectedOption?.bet,
      };
      dispatch(UserActions.removeOption(option));
    }
  };

  const handleOnOptionClick = (option: UserOption) => {
    if (selectedOption) {
      handleOnRemove(option);
    } else {
      handleOnAdd(option);
    }
  };
  const handleOnIncreaseBet = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();

    if (selectedOption && balance > 0) {
      option = {
        ...option,
        bet: selectedOption?.bet + 500,
      };

      dispatch(UserActions.updateOption(option));
    }
  };

  return (
    <button
      type="button"
      onClick={() => handleOnOptionClick(option)}
      disabled={shouldOptionBeDisabled}
      className={`w-full min-h-40 flex-1 flex flex-col justify-end items-center px-3 py-4 rounded-md uppercase text-2xl font-semibold ${text} ${bgColor} 
      ${shouldOptionBeDisabled ? "cursor-not-allowed" : "cursor-pointer"}
      ${
        shouldHighlightWinner
          ? `border-4 ${borderColor}`
          : `border-2 ${borderColor}/30`
      }
      `}
    >
      <span
        className={`flex flex-col h-full items-center gap-4 ${
          !selectedOption ? "justify-end" : "justify-between"
        }`}
      >
        {selectedOption && (
          <div className="flex items-center gap-2">
            <span
              onClick={handleOnIncreaseBet}
              className="flex items-center justify-center bg-white text-black border-3 text-base rounded-full p-2 font-extrabold border-custom-blue-light-2 w-12 h-12"
            >
              {selectedOption.bet}
            </span>
          </div>
        )}
        {option.type}
      </span>
    </button>
  );
}
