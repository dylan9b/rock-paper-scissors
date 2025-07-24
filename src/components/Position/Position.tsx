import { isOptionSelected, UserActions } from "../../features/user";
import { useAppDispatch } from "../../hooks/storeHooks";
import type { PositionOption } from "./Position-option";
import { variantStyles, type Variant } from "./Position-styles";
import { useSelector } from "react-redux";

export interface OptionType {
  variant: Variant;
}

export default function Position({ variant }: OptionType) {
  const isSelected = useSelector(isOptionSelected(variant));
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
    <div
      onClick={() => handleOnClick(variant)}
      className={`w-full md:max-w-40 md:min-w-40 flex flex-col cursor-pointer justify-center items-center p-12 border-3 rounded-lg uppercase transition-colors duration-300 text-xl font-semibold ${text} ${borderColor} ${bgColor} ${
        isSelected ? "shadow-2xl shadow-current/60" : "shadow-none"
      }`}
    >
      {variant}
    </div>
  );
}
