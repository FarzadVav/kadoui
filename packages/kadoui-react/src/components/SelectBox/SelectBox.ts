import SelectBoxList from "./SelectBoxList";
import SelectBoxField from "./SelectBoxField";
import SelectBoxInput from "./SelectBoxInput";
import { SelectBoxRoot } from "./SelectBoxRoot";
import SelectBoxOptions from "./SelectBoxOptions";

export * from "./types";

export const SelectBox = Object.assign(SelectBoxRoot, {
  Input: SelectBoxInput,
  Field: SelectBoxField,
  List: SelectBoxList,
  Options: SelectBoxOptions,
});
