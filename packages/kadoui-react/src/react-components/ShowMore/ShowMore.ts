import { ShowMoreRoot } from "./ShowMoreRoot";
import { ShowMoreFade } from "./ShowMoreFade";
import { ShowMoreToggle } from "./ShowMoreToggle";
import { ShowMoreContent } from "./ShowMoreContent";

export const ShowMore = Object.assign(ShowMoreRoot, {
  Content: ShowMoreContent,
  Toggle: ShowMoreToggle,
  Fade: ShowMoreFade
});

export * from "./showMoreTypes";