interface BattleResultTitleProps {
  children: React.ReactNode;
}

export default function BattleResultTitle({
  children,
}: BattleResultTitleProps) {
  return (
    <h1 className="text-3xl md:text-7xl text-custom-green-light-1">
      {children}
    </h1>
  );
}
