import type { BattleResultTextModel } from "./BattleResultText.model";

export default function BattleResultSubtitle({
  children,
}: BattleResultTextModel) {
  return (
    <h2 className="text-custom-gold text-center text-2xl md:text-4xl">
      {children}
    </h2>
  );
}
