import SelectBoxList from "./SelectBoxList";
import SelectBoxField from "./SelectBoxField";
import SelectBoxInput from "./SelectBoxInput";
import SelectBoxOptions from "./SelectBoxOptions";
import SelectBoxSearchInput from "./SelectBoxSearchInput";
import SelectBoxSearchField from "./SelectBoxSearchField";
import SelectBoxToggle from "./SelectBoxToggle";
import { SelectBoxStateRoot } from "./SelectBoxStateRoot";
import { SelectBoxSearchParamsRoot } from "./SelectBoxSearchParamsRoot";

const baseComponents = {
  Input: SelectBoxInput,
  Field: SelectBoxField,
  Toggle: SelectBoxToggle,
  List: SelectBoxList,
  SearchInput: SelectBoxSearchInput,
  SearchField: SelectBoxSearchField,
  Options: SelectBoxOptions,
};

export const SelectBox = Object.assign(SelectBoxStateRoot, baseComponents);

export const SelectBoxWithSearchParams = Object.assign(
  SelectBoxSearchParamsRoot,
  baseComponents,
);

export * from "./selectBoxTypes";
