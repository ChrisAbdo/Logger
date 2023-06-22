"use client";

import { useState, useMemo } from "react";

import { LogItem } from "@/types";

const useLogFilter = (savedLogs: LogItem[]) => {
  const [query, setQuery] = useState("");

  const filteredLogs = useMemo(
    () =>
      query === ""
        ? savedLogs
        : savedLogs.filter((log) => {
            return log.text.toLowerCase().includes(query.toLowerCase());
          }),
    [query, savedLogs]
  );

  return { query, setQuery, filteredLogs };
};

export default useLogFilter;
