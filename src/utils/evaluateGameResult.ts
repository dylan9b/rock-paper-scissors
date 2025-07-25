import { winsAgainst } from "../utils/game.utils";
import type { Winner } from "../features/game/types";

type OptionType = keyof typeof winsAgainst;

export function evaluateGame({
  userOptions,
  computerOption,
  multipliers,
}: {
  userOptions: { type: OptionType; bet: number }[];
  computerOption: OptionType;
  multipliers: { single: number; double: number };
}) {
  let totalWinningAmount = 0;
  let hasWin = false;
  let hasTie = false;
  let totalBet = 0;

  const isDouble = userOptions.length === 2;
  const multiplier = isDouble ? multipliers.double : multipliers.single;

  for (const option of userOptions) {
    totalBet += option.bet;

    // An option selected by the user is the same as the computer
    if (option.type === computerOption) {
      hasTie = true;
      totalWinningAmount += option.bet;
    } else if (winsAgainst[option.type] === computerOption) {
      hasWin = true;
      totalWinningAmount += option.bet * multiplier;
    }
  }

  const winner: Winner = hasWin ? "player" : hasTie ? "tie" : "computer";

  return {
    winner,
    totalWinningAmount,
    totalBet,
    isWin: hasWin,
    isTie: hasTie,
  };
}
