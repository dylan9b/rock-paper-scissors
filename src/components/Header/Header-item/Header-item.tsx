import type { HeaderItemModel } from "./header-item.model";

export default function HeaderItem({ label, value }: HeaderItemModel) {
  return (
    <p>
      {label}: <span className="text-white">{value}</span>
    </p>
  );
}
