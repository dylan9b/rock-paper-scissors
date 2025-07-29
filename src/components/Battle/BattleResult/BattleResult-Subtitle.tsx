interface BattleResultSubTitleProps {
  children: React.ReactNode;
}

export default function BattleResultSubtitle({
  children,
}: BattleResultSubTitleProps) {
  return (
    <h2 className="text-custom-gold text-center text-2xl md:text-4xl">
      {children}
    </h2>
  );
}
