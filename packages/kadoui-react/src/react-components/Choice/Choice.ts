import { ChoiceRoot } from "./ChoiceRoot";
import { ChoiceTrigger } from "./ChoiceTrigger";
import { ChoiceNavigation } from "./ChoiceNavigation";

export const Choice = Object.assign(ChoiceRoot, {
  Navigation: ChoiceNavigation,
  Trigger: ChoiceTrigger,
});

export * from "./choiceTypes";
