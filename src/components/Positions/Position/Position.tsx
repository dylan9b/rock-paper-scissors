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

  return (
    <button
      type="button"
      onClick={() => handleOnOptionClick(option)}
      disabled={shouldOptionBeDisabled}
      className={`transition-opacity duration-300 w-full h-40 md:w-80 md:h-35 flex flex-col justify-end items-center px-3 py-4 border-2 rounded-md uppercase text-2xl font-semibold ${text} ${borderColor} ${bgColor} 
      ${
        shouldOptionBeDisabled
          ? "opacity-30 cursor-not-allowed"
          : "cursor-pointer opacity-100"
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
