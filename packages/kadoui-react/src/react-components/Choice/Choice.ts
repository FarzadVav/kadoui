import { ChoiceRoot } from "./ChoiceRoot";
import { ChoiceThumb } from "./ChoiceThumb";
import { ChoiceTrigger } from "./ChoiceTrigger";
import { ChoiceNavigation } from "./ChoiceNavigation";

export const Choice = Object.assign(ChoiceRoot, {
  Navigation: ChoiceNavigation,
  Trigger: ChoiceTrigger,
  Thumb: ChoiceThumb
});

export * from "./choiceTypes";
