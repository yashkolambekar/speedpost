"use client";

import Header from "@/components/Header/Header";
import React, { useState } from "react";

function Dashboard() {

  const [selectedWebsite, setSelectedWebsite] = useState<string>("");
  const [selectedWebsiteIndex, setSelectedWebsiteIndex] = useState<number>(0);

  const [selectedForm, setSelectedForm] = useState<string>("");
  const [selectedFormIndex, setSelectedFormIndex] = useState<number>(0);

  const tempWebsites = [
    {
      name: "TeleS3",
      forms: [
        {
          name: "Enquiry"
        },
        {
          name: "Contact"
        }
      ]
    },
    {
        name: "IDOLCS"
    },
    {
        name: "Dharma4Dharma"
    },
    {
        name: "Ashreya Gurukul"
    },
    {
        name: "Shreyas' Living Room"
    }
  ];

  return (
    <>
      <Header absolute={false} />
      <div className="mt-10">
        <p className="text-[1.7em] font-bold">Dashboard</p>
        <p>You can manage your domains and forms from this dashboard.</p>
      </div>
      <div className="mt-10">
        <div>
          <p className="font-semibold">Websites</p>
          <div className="flex gap-2 mt-2">
            {
                tempWebsites.map((website, itr) => {
                    return (
                        <div className={`p-1.5 px-3 ${selectedWebsite === website.name && itr === selectedWebsiteIndex ? "bg-[rgba(255,255,255,1)] text-black font-medium" : "bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]"} rounded-md cursor-pointer`} key={website.name} onClick={() => {
                          setSelectedWebsite(website.name);
                          setSelectedWebsiteIndex(itr);
                        }}>
                            <p>{website.name}</p>
                        </div>
                    )
                })
            }
            <p>Add Website</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Forms</p>
          <div className="flex gap-2 mt-2">
            {
                tempWebsites[selectedWebsiteIndex]["forms"] ? tempWebsites[selectedWebsiteIndex]["forms"].map((form, itr) => {
                  return (
                      <div className={`p-1.5 px-3 ${selectedForm === form.name && itr === selectedFormIndex ? "bg-[rgba(255,255,255,1)] text-black font-medium" : "bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]"} rounded-md cursor-pointer`} key={form.name} onClick={() => {
                        setSelectedForm(form.name);
                        setSelectedFormIndex(itr);
                      }}>
                          <p>{form.name}</p>
                      </div>
                  )
              }) : <></>
            }
            <p>Add form</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
