import type { UserOption } from "../../../features/user";
import { PositionUI } from "./PositionUI";
import { usePositionLogic } from "../../../hooks/usePositionLogic";

type PositionProps = {
  option: UserOption;
};

export function Position({ option }: PositionProps) {
  const logic = usePositionLogic(option);

  return <PositionUI optionType={option.type} {...logic} />;
}
