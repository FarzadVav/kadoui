import { ShowMoreFade } from "./ShowMoreFade";
import { ShowMoreToggle } from "./ShowMoreToggle";
import { ShowMoreContent } from "./ShowMoreContent";
import { ShowMoreStateRoot } from "./ShowMoreStateRoot";
import { ShowMoreSearchParamsRoot } from "./ShowMoreSearchParamsRoot";

const baseComponents = {
  Content: ShowMoreContent,
  Toggle: ShowMoreToggle,
  Fade: ShowMoreFade,
};

export const ShowMore = Object.assign(ShowMoreStateRoot, baseComponents);

export const ShowMoreWithSearchParams = Object.assign(
  ShowMoreSearchParamsRoot,
  baseComponents,
);

export * from "./showMoreTypes";
