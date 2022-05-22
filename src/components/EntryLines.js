import React from "react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries }) => {
  return (
    <>
      {entries.map((entry) => (
        <EntryLine key={entry.id} entry={entry} />
      ))}
    </>
  );
};

export default EntryLines;
