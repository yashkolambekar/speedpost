"use client";

import React, { useState } from 'react'

function FormExplorer() {

    const [selectedWebsiteIndex, setSelectedWebsiteIndex] = useState<number>(0);
  const [selectedFormIndex, setSelectedFormIndex] = useState<number>(0);

  const tempWebsites = [
    {
      name: "TeleS3",
      forms: [
        {
          name: "Enquiry",
        },
        {
          name: "Contact",
        },
      ],
    },
    {
      name: "IDOLCS",
    },
    {
      name: "Dharma 4 Dharma",
    },
    {
      name: "Ashreya Gurukul",
    },
    {
      name: "Shreyas' Living Room",
    },
  ];


  return (
    <div className="mt-10">
        <div>
          <p className="font-semibold">Websites</p>
          <div className="flex gap-2 mt-2">
            {tempWebsites.map((website, itr) => {
              return (
                <div
                  className={`p-1.5 px-3 ${
                    itr === selectedWebsiteIndex
                      ? "bg-[rgba(255,255,255,1)] text-black font-medium"
                      : "bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]"
                  } rounded-md cursor-pointer`}
                  key={website.name}
                  onClick={() => {
                    setSelectedWebsiteIndex(itr);
                  }}
                >
                  <p>{website.name}</p>
                </div>
              );
            })}
            <p className="p-1.5">Add Website</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Forms</p>
          <div className="flex gap-2 mt-2">
            {tempWebsites[selectedWebsiteIndex]["forms"] ? (
              tempWebsites[selectedWebsiteIndex]["forms"].map((form, itr) => {
                return (
                  <div
                    className={`p-1.5 px-3 ${
                      itr === selectedFormIndex
                        ? "bg-[rgba(255,255,255,1)] text-black font-medium"
                        : "bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]"
                    } rounded-md cursor-pointer`}
                    key={form.name}
                    onClick={() => {
                      setSelectedFormIndex(itr);
                    }}
                  >
                    <p>{form.name}</p>
                  </div>
                );
              })
            ) : (
              <></>
            )}
            <p className="p-1.5">Add form</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Enquiry</p>
          <div className="p-4 mt-2 overflow-x-scroll rounded-md border-2 border-gray-500">
            <table className="dashtable">
              <thead>
                <tr>
                  <th>Submission ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Technology</th>
                  <th>Project Duration (weeks)</th>
                  <th>Submission Date</th>
                  <th>Feedback Score</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>John Doe</td>
                  <td>john.doe@example.com</td>
                  <td>Development</td>
                  <td>React</td>
                  <td>12</td>
                  <td>2024-10-01</td>
                  <td>4.5</td>
                  <td>Excellent understanding of React.</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Jane Smith</td>
                  <td>jane.smith@example.com</td>
                  <td>QA</td>
                  <td>Selenium</td>
                  <td>8</td>
                  <td>2024-10-04</td>
                  <td>4.8</td>
                  <td>Thorough and detailed feedback.</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Mike Johnson</td>
                  <td>mike.johnson@example.com</td>
                  <td>Design</td>
                  <td>Figma</td>
                  <td>10</td>
                  <td>2024-10-10</td>
                  <td>4.2</td>
                  <td>Creative designs with good detail.</td>
                </tr>
                <tr>
                  <td>004</td>
                  <td>Emily Davis</td>
                  <td>emily.davis@example.com</td>
                  <td>DevOps</td>
                  <td>Docker</td>
                  <td>14</td>
                  <td>2024-10-15</td>
                  <td>4.9</td>
                  <td>Efficient container management.</td>
                </tr>
                <tr>
                  <td>005</td>
                  <td>Chris Lee</td>
                  <td>chris.lee@example.com</td>
                  <td>Development</td>
                  <td>Node.js</td>
                  <td>11</td>
                  <td>2024-10-20</td>
                  <td>4.6</td>
                  <td>Good back</td>
                </tr>
                <tr>
                  <td>006</td>
                  <td>Anna White</td>
                  <td>anna.white@example.com</td>
                  <td>Data Science</td>
                  <td>Python</td>
                  <td>15</td>
                  <td>2024-10-25</td>
                  <td>4.7</td>
                  <td>Strong analytical approach.</td>
                </tr>
                <tr>
                  <td>007</td>
                  <td>Robert Brown</td>
                  <td>robert.brown@example.com</td>
                  <td>Development</td>
                  <td>Angular</td>
                  <td>9</td>
                  <td>2024-10-28</td>
                  <td>4.3</td>
                  <td>Solid front-end skills.</td>
                </tr>
                <tr>
                  <td>008</td>
                  <td>Lisa Adams</td>
                  <td>lisa.adams@example.com</td>
                  <td>Data Engineering</td>
                  <td>Apache Spark</td>
                  <td>13</td>
                  <td>2024-11-01</td>
                  <td>4.5</td>
                  <td>Good handling of large data sets.</td>
                </tr>
                <tr>
                  <td>009</td>
                  <td>Kevin Scott</td>
                  <td>kevin.scott@example.com</td>
                  <td>Security</td>
                  <td>Kali Linux</td>
                  <td>7</td>
                  <td>2024-11-03</td>
                  <td>4.6</td>
                  <td>Strong penetration testing.</td>
                </tr>
                <tr>
                  <td>010</td>
                  <td>Sophia Martin</td>
                  <td>sophia.martin@example.com</td>
                  <td>DevOps</td>
                  <td>Kubernetes</td>
                  <td>10</td>
                  <td>2024-11-06</td>
                  <td>4.8</td>
                  <td>Excellent orchestration skills.</td>
                </tr>
                <tr>
                  <td>011</td>
                  <td>Daniel Clark</td>
                  <td>daniel.clark@example.com</td>
                  <td>Development</td>
                  <td>Vue.js</td>
                  <td>12</td>
                  <td>2024-11-08</td>
                  <td>4.4</td>
                  <td>Efficient component development.</td>
                </tr>
                <tr>
                  <td>012</td>
                  <td>Emma King</td>
                  <td>emma.king@example.com</td>
                  <td>Product Management</td>
                  <td>JIRA</td>
                  <td>8</td>
                  <td>2024-11-10</td>
                  <td>4.7</td>
                  <td>Strong task organization.</td>
                </tr>
                <tr>
                  <td>013</td>
                  <td>Oliver Green</td>
                  <td>oliver.green@example.com</td>
                  <td>Development</td>
                  <td>Go</td>
                  <td>14</td>
                  <td>2024-11-12</td>
                  <td>4.6</td>
                  <td>Great performance optimization.</td>
                </tr>
                <tr>
                  <td>014</td>
                  <td>Mia Johnson</td>
                  <td>mia.johnson@example.com</td>
                  <td>UI/UX</td>
                  <td>Adobe XD</td>
                  <td>11</td>
                  <td>2024-11-14</td>
                  <td>4.5</td>
                  <td>Beautiful and user-friendly designs.</td>
                </tr>
                <tr>
                  <td>015</td>
                  <td>Liam White</td>
                  <td>liam.white@example.com</td>
                  <td>AI Research</td>
                  <td>TensorFlow</td>
                  <td>16</td>
                  <td>2024-11-17</td>
                  <td>4.9</td>
                  <td>Advanced AI model creation.</td>
                </tr>
                <tr>
                  <td>016</td>
                  <td>Charlotte Brown</td>
                  <td>charlotte.brown@example.com</td>
                  <td>Development</td>
                  <td>TypeScript</td>
                  <td>13</td>
                  <td>2024-11-20</td>
                  <td>4.8</td>
                  <td>Clean and type-safe coding.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default FormExplorer