import { ShowMoreRoot } from "./ShowMoreRoot";
import { ShowMoreFade } from "./ShowMoreFade";
import { ShowMoreContent } from "./ShowMoreContent";
import { ShowMoreToggle } from "./ShowMoreToggle";

export const ShowMore = Object.assign(ShowMoreRoot, {
  Content: ShowMoreContent,
  Toggle: ShowMoreToggle,
  Fade: ShowMoreFade
});