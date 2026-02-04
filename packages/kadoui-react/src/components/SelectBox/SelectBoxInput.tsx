import { LabelHTMLAttributes } from "react";

type SelectBoxInputPropsT = LabelHTMLAttributes<HTMLLabelElement>;

export default function SelectBoxInput(p: SelectBoxInputPropsT) {
  return <label {...p} />;
}
