import { createContext, Dispatch, SetStateAction } from "react";

export type TabsContextT = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export const TabsContext = createContext<TabsContextT>({
  activeTab: "",
  setActiveTab: () => { },
});