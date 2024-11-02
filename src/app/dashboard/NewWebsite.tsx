import dashboardElementsAtom from "@/store/atoms/DashboardElements";
import React from "react";
import { useRecoilState } from "recoil";

function NewWebsite() {
    
  const [visible, setVisible] = useRecoilState(dashboardElementsAtom);

  if (!visible.NewWebsite) {
    return <></>;
  }

  return (
    <>
      <div className="w-full min-h-[100dvh]">
        <p>Hello World</p>
      </div>
    </>
  );
}

export default NewWebsite;
