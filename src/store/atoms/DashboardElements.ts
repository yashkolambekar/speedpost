import { atom } from "recoil";

type dashboardElementsAtomType = {
  NewWebsite: Boolean,
  FormExplorer: Boolean
};

const dashboardElementsAtom = atom({
  key: "dashboardElementsAtom",
  default: <dashboardElementsAtomType>{
    NewWebsite: false,
    FormExplorer: true,
  },
});

export type {dashboardElementsAtomType};
export default dashboardElementsAtom;
