import type { PositionOption } from "./Position-option";

export const variantStyles: Record<
  PositionOption,
  {
    borderColor: string;
    bgColor: string;
    text: string;
    winClass: string;
  }
> = {
  rock: {
    borderColor: "border-custom-blue-light-1/30",
    bgColor: "bg-custom-blue",
    text: "text-custom-blue-light-1",
    winClass: "border-custom-blue-light-1",
  },
  paper: {
    borderColor: "border-custom-green-light-1/30",
    bgColor: "bg-custom-green",
    text: "text-custom-green-light-1",
    winClass: "border-custom-green-light-1",
  },
  scissors: {
    borderColor: "border-custom-red-light-1/30",
    bgColor: "bg-custom-red",
    text: "text-custom-red-light-1",
    winClass: "border-custom-red-light-1",
  },
};

export type Variant = keyof typeof variantStyles;
