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

type PositionProps = {
  option: UserOption;
};

export default function Position({ option }: PositionProps) {
  const totalOptionsSelected = useSelector(selectedOptionsSelector).length;

  const selectedOption = useSelector(selectedOptionSelector(option.type));
  const balance = useSelector(balanceSelector);

  const shouldOptionBeDisabled =
    (balance > 0 && totalOptionsSelected === 2 && !selectedOption) ||
    (balance === 0 && !selectedOption);

  const { text, borderColor, bgColor } = variantStyles[option.type];
  const dispatch = useAppDispatch();

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

  const handleOnDecreaseBet = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (selectedOption && selectedOption.bet > 500) {
      option = {
        ...option,
        bet: selectedOption?.bet - 500,
      };

      dispatch(UserActions.updateOption(option));
    }
  };
  return (
    <button
      type="button"
      onClick={() => handleOnOptionClick(option)}
      disabled={shouldOptionBeDisabled}
      className={`shadow-2xl transition-opacity duration-300 w-full md:w-40 flex flex-col justify-center items-center p-12 border-3 rounded-lg uppercase text-xl font-semibold ${text} ${borderColor} ${bgColor} 
      ${
        shouldOptionBeDisabled
          ? "opacity-30 cursor-not-allowed"
          : "cursor-pointer opacity-100"
      }
      ${selectedOption ? "shadow-current/60" : "shadow-current/0"}`}
    >
      <span className="flex flex-col items-center gap-4">
        {option.bet && selectedOption && (
          <div className="flex items-center gap-2">
            <span
              onClick={(e) => handleOnDecreaseBet(e)}
              className="flex rounded-full p-2 items-center justify-center size-4 border-2 border-current text-current"
            >
              -
            </span>
            {selectedOption.bet}
            <span
              onClick={(e) => handleOnIncreaseBet(e)}
              className="flex rounded-full p-2 items-center justify-center size-4 border-2 border-current text-current"
            >
              +
            </span>
          </div>
        )}
        {option.type}
      </span>
    </button>
  );
}
