import { AccessNavigation, AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation"

type ChoiceNavigationPropsT = AccessNavigationPropsT;

export function ChoiceNavigation(p: ChoiceNavigationPropsT) {
  return (
    <AccessNavigation {...p} />
  )
}