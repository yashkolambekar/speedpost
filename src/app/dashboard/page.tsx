"use client";

import Header from "@/components/Header/Header";
import React, { useState } from "react";
import FormExplorer from "./FormExplorer";
import { RecoilRoot, useRecoilState } from "recoil";
import NewWebsite from "./NewWebsite";
import dashboardElementsAtom from "@/store/atoms/DashboardElements";

function Dashboard() {

  return (
    <>
      <RecoilRoot>
        <Header absolute={false} />
        <div className="mt-10">
          <p className="text-[1.7em] font-bold">Dashboard</p>
          <p>You can manage your domains and forms from this dashboard.</p>
        </div>
        <div className="h-10 w-1"></div>
        <NewWebsite  />
        <FormExplorer />
      </RecoilRoot>
    </>
  );
}

export default Dashboard;
