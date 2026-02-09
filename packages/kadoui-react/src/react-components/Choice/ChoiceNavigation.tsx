import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

import type { ChoiceNavigationPropsT } from "./choiceTypes";

export function ChoiceNavigation(p: ChoiceNavigationPropsT) {
  return (
    <AccessNavigation {...p} />
  )
}