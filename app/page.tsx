"use client";

import React from "react";
import useLogs from "@/hooks/useLogs";
import useLogFilter from "@/hooks/useLogFilter";
import Navbar from "@/components/layout/navbar";
import { Team } from "@/components/ui/combo-box";

const groups = [
  {
    label: "Categories",
    teams: [
      {
        label: "Links",
        value: "Links",
      },
      {
        label: "Thoughts",
        value: "Thoughts",
      },
    ],
  },
];

export default function Home() {
  let { logText, setLogText, savedLogs, createLog } = useLogs();
  let { query, setQuery, filteredLogs } = useLogFilter(savedLogs);

  let [selectedTeam, setSelectedTeam] = React.useState<Team>(
    groups[0].teams[0]
  );
  return (
    <>
      <Navbar
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
        groups={groups}
      />

      <input
        type="text"
        className="border"
        placeholder="Create a log"
        onChange={(e) => setLogText(e.target.value)}
        value={logText}
      />
      <button
        onClick={(e) => {
          createLog(selectedTeam.value);
        }}
      >
        Click me
      </button>

      <input
        type="search"
        className="border"
        placeholder="Search logs"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />

      <div>
        {filteredLogs.map((log) => {
          return (
            <div key={log.id}>
              <p>
                {log.text} | {log.category}
              </p>
              <p>{log.size}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
