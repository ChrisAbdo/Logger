"use client";

import React from "react";

import { LogItem, TextItem } from "@/types";

export default function useLogs() {
  let [logText, setLogText] = React.useState("");
  let [category, setCategory] = React.useState("");
  let [savedLogs, setSavedLogs] = React.useState<LogItem[]>([]);
  let [, setSavedTexts] = React.useState<TextItem[]>([]);

  React.useEffect(() => {
    let storedTexts = localStorage.getItem("texts");
    let storedLogs = localStorage.getItem("logs");

    if (storedTexts) {
      setSavedTexts(JSON.parse(storedTexts));
    }

    if (storedLogs) {
      setSavedLogs(JSON.parse(storedLogs));
    }
  }, []);

  async function createLog(category: string) {
    if (logText === "") return;

    let sizeInBytes = new Blob([logText], { type: "text/plain" }).size;
    let sizeInKB = sizeInBytes / 1024; // Convert bytes to kilobytes

    const newLogs: LogItem[] = [
      ...savedLogs,
      {
        text: logText,
        category: category,
        id: savedLogs.length + 1,
        size: sizeInKB,
      },
    ];

    localStorage.setItem("logs", JSON.stringify(newLogs));
    setSavedLogs(newLogs);
    setLogText("");
    console.log(newLogs);
  }

  return { logText, category, setCategory, setLogText, savedLogs, createLog };
}
