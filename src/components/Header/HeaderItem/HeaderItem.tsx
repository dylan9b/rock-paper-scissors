import { memo } from "react";
import type { HeaderItemModel } from "./HeadrItem.model";

function HeaderItem({ label, value }: HeaderItemModel) {
  return (
    <p>
      {label}: <span className="text-white">{value}</span>
    </p>
  );
}

export default memo(HeaderItem);
