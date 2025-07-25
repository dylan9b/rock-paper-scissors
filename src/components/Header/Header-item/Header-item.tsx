import { memo } from "react";
import type { HeaderItemModel } from "./header-item.model";

function HeaderItem({ label, value }: HeaderItemModel) {
  return (
    <p>
      {label}: <span className="text-white">{value}</span>
    </p>
  );
}

export default memo(HeaderItem);
