import { PasswordInputRoot } from "./PasswordInputRoot";
import { PasswordInputField } from "./PasswordInputField";
import { PasswordInputToggle } from "./PasswordInputToggle";

export const PasswordInput = Object.assign(PasswordInputRoot, {
  Field: PasswordInputField,
  Toggle: PasswordInputToggle
});