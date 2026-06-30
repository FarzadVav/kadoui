import { ChoiceThumb } from "./ChoiceThumb";
import { ChoiceToggle } from "./ChoiceToggle";
import { ChoiceStateRoot } from "./ChoiceStateRoot";
import { ChoiceSearchParamsRoot } from "./ChoiceSearchParamsRoot";

const baseComponents = {
  Toggle: ChoiceToggle,
  Thumb: ChoiceThumb,
};

export const Choice = Object.assign(ChoiceStateRoot, baseComponents);

export const ChoiceWithSearchParams = Object.assign(
  ChoiceSearchParamsRoot,
  baseComponents,
);

export * from "./choiceTypes";
