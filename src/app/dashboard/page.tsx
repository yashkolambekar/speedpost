import Header from "@/components/Header/Header";
import React, { useState } from "react";
import FormExplorer from "./FormExplorer";

function Dashboard() {

  return (
    <>
      <Header absolute={false} />
      <div className="mt-10">
        <p className="text-[1.7em] font-bold">Dashboard</p>
        <p>You can manage your domains and forms from this dashboard.</p>
      </div>
      <FormExplorer />      
    </>
  );
}

export default Dashboard;
