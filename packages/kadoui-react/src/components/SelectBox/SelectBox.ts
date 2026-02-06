import SelectBoxList from "./SelectBoxList";
import SelectBoxField from "./SelectBoxField";
import SelectBoxInput from "./SelectBoxInput";
import { SelectBoxRoot } from "./SelectBoxRoot";
import SelectBoxOptions from "./SelectBoxOptions";
import SelectBoxSearchInput from "./SelectBoxSearchInput";
import SelectBoxSearchField from "./SelectBoxSearchField";

export const SelectBox = Object.assign(SelectBoxRoot, {
  Input: SelectBoxInput,
  Field: SelectBoxField,
  List: SelectBoxList,
  SearchInput: SelectBoxSearchInput,
  SearchField: SelectBoxSearchField,
  Options: SelectBoxOptions,
});

export * from "./selectBoxTypes";
