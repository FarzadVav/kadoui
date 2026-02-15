import { ChoiceRoot } from "./ChoiceRoot";
import { ChoiceThumb } from "./ChoiceThumb";
import { ChoiceToggle } from "./ChoiceToggle";
import { ChoiceNavigation } from "./ChoiceNavigation";

export const Choice = Object.assign(ChoiceRoot, {
  Navigation: ChoiceNavigation,
  Toggle: ChoiceToggle,
  Thumb: ChoiceThumb
});

export * from "./choiceTypes";
