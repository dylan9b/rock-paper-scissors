import {
  isOptionSelected,
  selectedOptions,
  UserActions,
} from "../../../features/user";
import { useAppDispatch } from "../../../hooks/storeHooks";
import type { PositionOption } from "./Position-option";
import { variantStyles, type Variant } from "./Position-styles";
import { useSelector } from "react-redux";

export interface OptionType {
  variant: Variant;
}

export default function Position({ variant }: OptionType) {
  const isSelected = useSelector(isOptionSelected(variant));
  const totalOptionsSelected = useSelector(selectedOptions).length;

  const { text, borderColor, bgColor } = variantStyles[variant];
  const dispatch = useAppDispatch();

  const handleOnAdd = (variant: PositionOption) => {
    dispatch(UserActions.addOption(variant));
  };

  const handleOnRemove = (variant: PositionOption) => {
    dispatch(UserActions.removeOption(variant));
  };

  const handleOnClick = (variant: PositionOption) => {
    if (isSelected) {
      handleOnRemove(variant);
    } else {
      handleOnAdd(variant);
    }
  };

  return (
    <button
      type="button"
      onClick={() => handleOnClick(variant)}
      disabled={!isSelected && totalOptionsSelected >= 2}
      className={`shadow-2xl transition-opacity duration-300 w-full md:w-40 flex flex-col justify-center items-center p-12 border-3 rounded-lg uppercase text-xl font-semibold ${text} ${borderColor} ${bgColor} 
      ${
        !isSelected && totalOptionsSelected >= 2
          ? "opacity-30 cursor-not-allowed"
          : "cursor-pointer opacity-100"
      }
      ${isSelected ? "shadow-current/60" : "shadow-current/0"}`}
    >
      {variant}
    </button>
  );
}
