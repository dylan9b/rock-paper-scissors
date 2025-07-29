import type { BattleResultTextModel } from "./BattleResultText.model";

export default function BattleResultTitle({ children }: BattleResultTextModel) {
  return (
    <h1 className="text-3xl md:text-7xl text-custom-green-light-1">
      {children}
    </h1>
  );
}
