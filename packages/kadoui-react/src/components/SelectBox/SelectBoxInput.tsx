import type { ComponentProps } from "react";

type SelectBoxInputPropsT = ComponentProps<"label">;

export default function SelectBoxInput(p: SelectBoxInputPropsT) {
  return <label {...p} />;
}
