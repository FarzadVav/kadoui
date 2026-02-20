import { ChoiceRoot } from "./ChoiceRoot";
import { ChoiceThumb } from "./ChoiceThumb";
import { ChoiceToggle } from "./ChoiceToggle";

export const Choice = Object.assign(ChoiceRoot, {
  Toggle: ChoiceToggle,
  Thumb: ChoiceThumb
});

export * from "./choiceTypes";
