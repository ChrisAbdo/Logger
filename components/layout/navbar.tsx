import { ScrollText } from "lucide-react";
import React from "react";
import ComboBox, { Team } from "@/components/ui/combo-box";

export default function Navbar({ selectedTeam, setSelectedTeam, groups }: any) {
  return (
    <div className="flex justify-between p-4">
      <div className="flex items-center space-x-2">
        <ScrollText size={20} />
        <span>/</span>
        <ComboBox
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
          // @ts-ignore
          groups={groups}
        />
      </div>
      <div>Selected team: {selectedTeam.label}</div>{" "}
      {/* Use the selected team information */}
    </div>
  );
}
