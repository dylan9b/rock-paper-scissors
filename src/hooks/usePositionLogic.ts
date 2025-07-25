import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { variantStyles } from "../components/Positions/Position/Position-styles";
import {
  winningOptionSelector,
  gameStatusSelector,
  gameBetIncrementSelector,
} from "../features/game";
import {
  type UserOption,
  selectedOptionsSelector,
  selectedOptionSelector,
  balanceSelector,
  UserActions,
} from "../features/user";
import { useAppDispatch } from "./storeHooks";

export function usePositionLogic(option: UserOption) {
  const dispatch = useAppDispatch();

  const totalOptionsSelected = useSelector(selectedOptionsSelector).length;
  const selectedOption = useSelector(selectedOptionSelector(option.type));
  const winningOption = useSelector(winningOptionSelector);
  const balance = useSelector(balanceSelector);
  const gameStatus = useSelector(gameStatusSelector);
  const betIncrement = useSelector(gameBetIncrementSelector);

  const shouldOptionBeDisabled = useMemo(() => {
    return (
      (balance > 0 && totalOptionsSelected === 2 && !selectedOption) ||
      (balance === 0 && !selectedOption) ||
      gameStatus !== "idle"
    );
  }, [balance, totalOptionsSelected, selectedOption, gameStatus]);

  const shouldHighlightWinner =
    winningOption === option.type && gameStatus === "finished";

  const { text, borderColor, bgColor } = variantStyles[option.type];

  const onAddOption = useCallback(() => {
    dispatch(UserActions.addOption(option));
  }, [dispatch, option]);

  const onRemoveOption = useCallback(() => {
    if (selectedOption) {
      dispatch(
        UserActions.removeOption({
          ...option,
          bet: selectedOption.bet,
        })
      );
    }
  }, [dispatch, option, selectedOption]);

  const onClick = useCallback(() => {
    if (selectedOption) onRemoveOption();
    else onAddOption();
  }, [selectedOption, onRemoveOption, onAddOption]);

  const onIncreaseBet = useCallback(() => {
    if (selectedOption && balance > 0) {
      dispatch(
        UserActions.updateOption({
          ...option,
          bet: selectedOption.bet + betIncrement,
        })
      );
    }
  }, [dispatch, option, selectedOption, balance, betIncrement]);

  return {
    bet: selectedOption?.bet ?? null,
    isDisabled: shouldOptionBeDisabled,
    isWinner: shouldHighlightWinner,
    onClick,
    onIncreaseBet,
    styles: { text, borderColor, bgColor },
  };
}
